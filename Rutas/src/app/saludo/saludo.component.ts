import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	// Para recuperar la parte variable de una ruta me tengo que suscribit a los cabios del Observable this.activatedRoute.params
  	this.activatedRoute.params.subscribe((params) => {
  		console.log(params.mensaje);
  	});
  }

}
