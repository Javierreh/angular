import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	moneda: number;
	fecha: Date;
	fechaM: any;
	numero: number;
	randomNum: number;

	constructor() {
		this.moneda = 3200.21;
		this.fecha = new Date();

		this.fechaM = moment();
		console.log(this.fechaM.month());
		let fechaFinBootcamp = moment('28/06/2019', 'dd/MM/yyyy');
		console.log(fechaFinBootcamp);
		console.log(fechaFinBootcamp.diff(this.fechaM, 'days'));

		this.numero = 3313.988102;

		this.randomNum = Math.random();
	}

}
