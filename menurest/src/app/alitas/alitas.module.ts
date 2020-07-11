import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlitasPageRoutingModule } from './alitas-routing.module';

import { AlitasPage } from './alitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlitasPageRoutingModule
  ],
  declarations: [AlitasPage]
})
export class AlitasPageModule {}
