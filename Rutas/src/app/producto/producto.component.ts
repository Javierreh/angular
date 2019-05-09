import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

	productoId: number;

  constructor(private activatedRoute: ActivatedRoute) {
  	this.activatedRoute.params.subscribe((params) => {
  		this.productoId = params.identificador;
  		console.log(params);
  	});
  }

  ngOnInit() {
  }

}
