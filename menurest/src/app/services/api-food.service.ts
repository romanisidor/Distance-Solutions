import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Comida} from '../shared/inteface'


@Injectable({
  providedIn: 'root'
})
export class ApiFoodService {

  comida: Comida[]

  constructor( public http:HttpClient) { }

  GetProductos():Observable<Comida> {
    return this.http.get<Comida>('http://192.168.8.128:3000/comida');
  }
}
