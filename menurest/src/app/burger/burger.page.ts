import { Component, OnInit } from '@angular/core';
import { ApiFoodService } from '../services/api-food.service';
import {Pasta} from '../shared/inteface';
import {PedidoService} from '../services/pedido.service'
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.page.html',
  styleUrls: ['./burger.page.scss'],
})
export class BurgerPage implements OnInit {

  pedido = [];
  foodlist: Pasta;
  contador : BehaviorSubject<number>;
  constructor(private ApiFoodService:ApiFoodService, private PedidoService:PedidoService) { }

  ngOnInit() {
    
    this.ApiFoodService.GetBurger().subscribe( (data) =>{
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
