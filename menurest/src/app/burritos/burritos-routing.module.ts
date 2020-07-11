import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurritosPage } from './burritos.page';

const routes: Routes = [
  {
    path: '',
    component: BurritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurritosPageRoutingModule {}
