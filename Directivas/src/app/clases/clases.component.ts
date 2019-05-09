import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

	cambioCss: boolean;

	constructor() {
		this.cambioCss = true;
	}

	ngOnInit() {
	}

	handleClick() {
		this.cambioCss = !this.cambioCss;
	}

}
