import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

	color: string;

	constructor() {
  		this.color = 'rojo';
	}

	ngOnInit() {
	}

	handleClick(newColor) {
		this.color = newColor;
	}

}
