import { Component, OnInit } from '@angular/core';
import {PedidoService} from '../services/pedido.service'
import { ApiFoodService } from '../services/api-food.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
pedido= [];
  constructor( private PedidoService:PedidoService) { }

  ngOnInit() {
    this.pedido = this.PedidoService.getPedido();
  }
  disminuir(foodlist){
    this.PedidoService.disPedido(foodlist);
  }
  incrementar(foodlist){
    this.PedidoService.addPedido(foodlist);
  }
  eliminar(foodlist){
    this.PedidoService.eliminarPedido(foodlist);
  }
  getTotal(){
    return this.pedido.reduce((i, j) => i + j.PRICE * j.amount, 0);
  }
}
