import { Component, OnInit } from '@angular/core';
import { ApiFoodService } from '../services/api-food.service';
import {Pasta} from '../shared/inteface';
import {PedidoService} from '../services/pedido.service'
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
})
export class PastaPage implements OnInit {

  pedido = [];
  foodlist: Pasta;
  contador : BehaviorSubject<number>;
  constructor(private ApiFoodService:ApiFoodService, private PedidoService:PedidoService) { }

  ngOnInit() {
    
    this.ApiFoodService.GetPasta().subscribe( (data) =>{
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
