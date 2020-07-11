import { Component, OnInit } from '@angular/core'
import { ApiFoodService } from '../services/api-food.service';
import {Bebida} from '../shared/inteface';
import {PedidoService} from '../services/pedido.service'
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {
  pedido = [];
  foodlist: Bebida;
  contador : BehaviorSubject<number>;
  constructor(private ApiFoodService:ApiFoodService, private PedidoService:PedidoService) { }

  ngOnInit() {
    
    this.ApiFoodService.GetBebidas().subscribe( (data) =>{
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
