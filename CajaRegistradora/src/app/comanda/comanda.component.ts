import { Producto } from './../models/producto.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

	@Input() arrComanda: Producto[];
	total: number;

	constructor() {
	}

	ngOnInit() {
	}

	precioTotal() {
		this.total = 0;
		for(let p of this.arrComanda) {
			this.total += p.precio;
		}
		return Math.round(this.total * 100) / 100;
	}


}
