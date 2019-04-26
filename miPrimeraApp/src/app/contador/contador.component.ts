import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

	// Interpolation = lo de poner propiedades entre {{}}
	// property binding = [id]="blabla"

	cont: number;
	identificador: string;
	
	//input: propiedades de nuestra clase
	@Input() inicio: string; //con el decorador @Input()


	constructor() { 
		this.identificador = "cajita";
	}

	ngOnInit() {
		this.cont = parseInt(this.inicio);
	}

	handleClick($event) {
		console.log($event.screenX);
		console.log('Botón pulsado');
		let interval = setInterval(() => {
			this.cont--;
			if (this.cont <= 0) {
				clearInterval(interval);
				this.identificador = "caja";
			}
		}, 1000);
	}

	resetCont() {
		this.cont = parseInt(this.inicio);
	}

}
