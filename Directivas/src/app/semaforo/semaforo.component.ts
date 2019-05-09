import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

	colorSemaforo: string;
	muestra: boolean;


	constructor() {
		this.colorSemaforo = "rojo";
		this.muestra = true;
	}

	ngOnInit() {
		setInterval(() => {
			if(this.colorSemaforo == 'rojo') {
				this.colorSemaforo = 'ambar';
			}
			else if (this.colorSemaforo == 'ambar') {
				this.colorSemaforo = 'verde';
			}
			else if (this.colorSemaforo == 'verde') {
				this.colorSemaforo = 'rojo';
			}
		}, 1000);
	}

	handleClick(color) {
		this.colorSemaforo = color;
	}

	muestraOculta() {
		this.muestra = !this.muestra;
	}
}
