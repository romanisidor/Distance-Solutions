import { Component, OnInit } from '@angular/core';
import { ApiFoodService } from '../services/api-food.service';
import {Comida} from '../shared/inteface';
import {PedidoService} from '../services/pedido.service'
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.page.html',
  styleUrls: ['./pizzas.page.scss'],
})
export class PizzasPage implements OnInit {

  pedido = [];
  foodlist : Comida;
  contador : BehaviorSubject<number>;
  constructor(private ApiFoodService:ApiFoodService, private PedidoService:PedidoService) { }

  ngOnInit() {
    
    this.ApiFoodService.GetProductos().subscribe( (data) =>{
      this.foodlist = data
    });
    this.pedido = this.PedidoService.getPedido();
    this.contador = this.PedidoService.getContador();
  }
  agregar(foodlist){
    this.PedidoService.addPedido(foodlist);
  }
  VerPedido(){
    this.PedidoService.VerPedido();
  }
}
