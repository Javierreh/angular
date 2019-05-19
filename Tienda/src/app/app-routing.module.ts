import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
	{ path: 'shop', component: ShopComponent },
	{ path: 'cart', component: CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
