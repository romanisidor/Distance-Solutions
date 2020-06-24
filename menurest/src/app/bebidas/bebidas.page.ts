import { Component, OnInit } from '@angular/core';
import { ApiFoodService } from '../services/api-food.service';
import {Comida} from '../shared/inteface';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {

  foodlist:Comida 
  constructor(private ApiFoodService:ApiFoodService) { 

  }

  ngOnInit() {
    
    this.ApiFoodService.GetUsers().subscribe( (data) =>{
      this.foodlist = data
    })
  }

}
