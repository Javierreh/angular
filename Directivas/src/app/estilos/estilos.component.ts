import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent implements OnInit {

	estilosP: any;

	constructor() {
		this.estilosP = {
			color: 'black',
			fontSize: '32px',
			backgroundColor: '#12F'
		}
	}

	ngOnInit() {
	}

}
