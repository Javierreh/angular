import { Empleado } from './models/empleado.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	arrEmpleados: Empleado[];

	constructor() {
		this.arrEmpleados = [];
	}
  
	handleEmpleadoSent($event) {
		let newEmpleado = new Empleado($event.nombre, $event.apellidos, $event.departamento, $event.imagen);
		this.arrEmpleados.push(newEmpleado);
	}

}
