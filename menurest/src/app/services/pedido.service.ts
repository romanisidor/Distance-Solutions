import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedido = [];
  private contador= new BehaviorSubject(0);

  constructor(private router: Router) { }

  getPedido(){
    return this.pedido;
  }
  getContador(){
    return this.contador;
  }

  addPedido(pedido){
    let added =false;
    for(let c of this.pedido){
      if(c.id === pedido.id){
        c.amount+=1;
        added=true;
        break;
      }
    }
    if(!added){
      pedido.amount=1;
      this.pedido.push(pedido);
    }
    this.contador.next(this.contador.value +1);
  }
  disPedido(pedido){
    for(let [index,c] of this.pedido.entries()){
      if(c.id === pedido.id){
        c.amount -=1;
        if(c.amount ==0){
          this.pedido.splice(index,1);
        }
      }
    }
    this.contador.next(this.contador.value - 1);
  }
  eliminarPedido(pedido){
    for( let [index,c] of this.pedido.entries()){
      if (c.id == pedido.id){
        this.contador.next(this.contador.value - c.amount);
        this.pedido.splice(index,1);
      }
    }
  }
  VerPedido(){
    this.router.navigate(['pedidos']);
  }
}