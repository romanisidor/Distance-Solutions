import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../controllers/user';
import { Response } from '../controllers/response';
import {tap} from 'rxjs/operators';
import {Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;  

  constructor(private http: HttpClient) { }

  login(user: User): Observable<Response>{
    return this.http.post<Response>(`${this.AUTH_SERVER}/login`,
    user).pipe(tap(
      (res: Response) =>{
        if (res){
          //gurdar codigo
          this.saveToken(res.dataUser.code);
        }
      })
      );
    }


    logout(): void{
      this.token = '';
      localStorage.removeItem("code");
    }
  
    private saveToken (code: string): void{
      localStorage.setItem("code", code);
      this.token = code;
    }
  
    private getTokenCode():string{
      if (!this.token){
        this.token = localStorage.getItem("code")
      }
      return this.token;
  
    }
}
