import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'code',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'code',
    loadChildren: () => import('./code/code.module').then( m => m.CodePageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'entradas',
    loadChildren: () => import('./entradas/entradas.module').then( m => m.EntradasPageModule)
  },
  {
    path: 'alitas',
    loadChildren: () => import('./alitas/alitas.module').then( m => m.AlitasPageModule)
  },
  {
    path: 'burritos',
    loadChildren: () => import('./burritos/burritos.module').then( m => m.BurritosPageModule)
  },
  {
    path: 'pasta',
    loadChildren: () => import('./pasta/pasta.module').then( m => m.PastaPageModule)
  },
  {
    path: 'burger',
    loadChildren: () => import('./burger/burger.module').then( m => m.BurgerPageModule)
  },
  {
    path: 'pizzas',
    loadChildren: () => import('./pizzas/pizzas.module').then( m => m.PizzasPageModule)
  },  {
    path: 'drinks',
    loadChildren: () => import('./drinks/drinks.module').then( m => m.DrinksPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
