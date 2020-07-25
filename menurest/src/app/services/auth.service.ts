import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../controllers/user';
import { Response } from '../controllers/response';
import {tap} from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import {Observable, BehaviorSubject, throwError } from 'rxjs';
export const TOKEN_SESSION = 'auth-token';
export const authdata = "auth-data";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER: string = 'https://distancesolutions.herokuapp.com';
  authSubject = new BehaviorSubject(false);


  private token: string; 
  private response: string;

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: HttpClient) { 
    this.checkStorage(this.response);
  }

  public tokenSession: string;
  public userData: User ;


  setLoggedIn(value: boolean){
    this.loggedInStatus = value
    localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn_() {
    return JSON.parse(localStorage.getItem( 'loggedIn') || this.loggedInStatus.toString())
  }

  checkStorage(code: string){
    const authToken = sessionStorage.getItem("code");
    const userData = sessionStorage.getItem(code);
    this.tokenSession = authToken;
    if (userData){
      this.userData = JSON.parse(userData) as any;

    } else {
      this.userData=null;

    }

  }

  login(user: User): Observable<Response>{
    return this.http.post<Response>(`${this.AUTH_SERVER}/login`,
    user).pipe(tap(
      (res: Response) =>{
        if (res){
          //guardar token en el localStorage
          this.saveToken(res.dataUser.code);
          this.saveSession(res.dataUser.code);
          console.log(sessionStorage);
          this.checkStorage(res.dataUser.code);
          this.response= res.dataUser.code;
          console.log(this.response);
        }
      })
      );
    }


    // logout(): void{
    //   this.token = '';
    //   localStorage.removeItem("code");
    // }
  
    private saveToken (code: string): void{
      localStorage.setItem("code", code);
      this.token = code;
    }

    private saveSession(code: string): void{
      sessionStorage.setItem("code", code)
    }
  
    private getTokenCode():string{
      if (!this.token){
        this.token = localStorage.getItem("code")
      }
      return this.token;
    }

    public isLoggedIn(){
      return this.tokenSession !== null;

    }

    public logout(){
      if (!this.isLoggedIn()) return;
      sessionStorage.clear();
    
    }
}
