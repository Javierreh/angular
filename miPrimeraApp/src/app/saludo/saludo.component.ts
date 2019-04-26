import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

	mensaje: string;
	msg: string; //las unicas variables(propiedades de nuetra clase) que se pueden usar en el html son las definidas aqui o...

	constructor() { 
		this.mensaje = 'Este es mi mensaje';
  	}

	ngOnInit() {
		setTimeout(() => this.mensaje = "Mensaje cambiado", 5000);
		this.msg = this.mostrarOtroMensaje();
	}

	mostrarOtroMensaje(): string {
		return 'Este es el otro mensaje'; //...o tambien las devueltas en metodos de la clase
	}

}
