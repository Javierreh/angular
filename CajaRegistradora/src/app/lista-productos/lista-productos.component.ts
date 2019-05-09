import { Producto } from './../models/producto.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

	@Input() productos: Producto[];
	@Input() titulo: string;

	@Output() productoSent = new EventEmitter();

	constructor() {

	}

	ngOnInit() {
	}

	handleClick(producto) {
		this.productoSent.emit(producto);
	}

}
