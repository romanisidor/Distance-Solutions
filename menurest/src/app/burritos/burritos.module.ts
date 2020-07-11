import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurritosPageRoutingModule } from './burritos-routing.module';

import { BurritosPage } from './burritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurritosPageRoutingModule
  ],
  declarations: [BurritosPage]
})
export class BurritosPageModule {}
