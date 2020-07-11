import { Component, OnInit } from '@angular/core';
import { ApiFoodService } from '../services/api-food.service';
import {Bebida, Alitas} from '../shared/inteface';
import {PedidoService} from '../services/pedido.service'
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-alitas',
  templateUrl: './alitas.page.html',
  styleUrls: ['./alitas.page.scss'],
})
export class AlitasPage implements OnInit {
  
  pedido = [];
  foodlist: Alitas;
  contador : BehaviorSubject<number>;
  constructor(private ApiFoodService:ApiFoodService, private PedidoService:PedidoService) { }

  ngOnInit() {
    
    this.ApiFoodService.GetAlitas().subscribe( (data) =>{
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
