import { Component, OnInit } from '@angular/core';
import { TiendaService } from './../tienda.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

	productos: any;

  constructor(private tiendaService: TiendaService) { }

    ngOnInit() {
        this.tiendaService.getAll().subscribe((res) => {
            this.productos = res;
        });
    }

  filtrarProductos(value) {

  	if (value != "todos") {
  		this.tiendaService.getProducts(value).subscribe((res) => {
  			this.productos = res;
  		});
  	}
  	else {
  		this.tiendaService.getAll().subscribe((res) => {
  			this.productos = res;
  		});
  	}
  	
  }

    addToCart(pItemId) {

  		if (localStorage.getItem('token')) { //Si existe el token(carrito)
  			//Agregar producto
  			this.tiendaService.addProduct(localStorage.getItem('token'), pItemId).subscribe((res) => {
  				console.log(res);
  			});
  		}
  		else {
            this.tiendaService.getToken().subscribe((res) => {
                //Guardar token localmente
                localStorage.setItem('token', res["token_cart"]);
                //agregar producto
                this.tiendaService.addProduct(localStorage.getItem('token'), pItemId).subscribe((res) => {
                    console.log(res);
                });
            });	
        }
    }

}
