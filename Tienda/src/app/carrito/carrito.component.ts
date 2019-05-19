import { Component, OnInit } from '@angular/core';
import { TiendaService } from './../tienda.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

	carrito: any;
	
	constructor(private tiendaService: TiendaService) { }

	ngOnInit() {

		if (!localStorage.getItem('token')) {
			this.tiendaService.getToken().subscribe((res) => {
				localStorage.setItem('token', res["token_cart"]);
				console.log(res);
				this.tiendaService.showCart(localStorage.getItem('token')).subscribe((res) => {
  					this.carrito = res;
  				});
			});
		}
		else {
			this.tiendaService.showCart(localStorage.getItem('token')).subscribe((res) => {
  				this.carrito = res;
  			});
		}
	}

	borrarDelCarrito(pItemId) {
		this.tiendaService.deleteProduct(localStorage.getItem('token'), pItemId).subscribe((res) => {
  			console.log(res);

  			this.tiendaService.showCart(localStorage.getItem('token')).subscribe((res) => {
  				this.carrito = res;
  				console.log(this.carrito);
  			});
  		});
	}

}


