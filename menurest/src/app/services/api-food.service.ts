import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Comida, Bebida, Alitas, Pasta, Tacos, Burger, Entradas} from '../shared/inteface'


@Injectable({
  providedIn: 'root'
})
export class ApiFoodService {

  comida: Comida[]

  url: string = 'https://menu-json.herokuapp.com';
  constructor( public http:HttpClient) { }
  
  GetProductos():Observable<Comida> {
    return this.http.get<Comida>(`${this.url}/PIZZAS`);
  }
  
  GetBebidas():Observable<Bebida> {
    return this.http.get<Bebida>(`${this.url}/BEBIDAS`);
  }

  GetAlitas():Observable<Alitas> {
    return this.http.get<Alitas>(`${this.url}/ALITAS`);
  }

  GetPasta():Observable<Pasta> {
    return this.http.get<Pasta>(`${this.url}/PASTAS`);
  }

  GetTacos():Observable<Tacos> {
    return this.http.get<Tacos>(`${this.url}/TACOS`);
  }

  GetBurger():Observable<Burger> {
    return this.http.get<Burger>(`${this.url}/BURGER`);
  }
  
  GetEntradas():Observable<Entradas> {
    return this.http.get<Entradas>(`${this.url}/ENTRADAS`);
  }
}
