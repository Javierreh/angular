import { Empleado } from './../models/empleado.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	@Output() empleadoSent = new EventEmitter();

	// Propiedades de la clase donde voy a ir almacenando cada uno de los valores diferentes campos de texto
	empleadoTmp: Empleado;
	
	constructor() {
		this.empleadoTmp = new Empleado('', '', '', '');
	}

	ngOnInit() {
	}

	submitForm() {
		this.empleadoSent.emit(this.empleadoTmp);
	}

}
