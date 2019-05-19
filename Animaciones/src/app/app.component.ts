import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  	trigger('cambiaColor', [
  		state('rojo', style({
  			'background-color': 'red'
  		})),
  		state('amarillo', style({
  			'background-color': 'yellow',
  			'transform': 'scale(1.5)'
  		})),
  		state('verde', style({
  			'background-color': 'green'
  		})),
  		transition('rojo => amarillo', animate(1000)),
  		transition('amarillo => verde', animate('.5s ease-out')),
  		transition('verde => rojo', animate('3s')),
  		transition('void => *', [
  			style({transform: 'translate(-300%)'}),
  			animate('3s')
  		])
  		

  	])
  ]
})
export class AppComponent {

	color: string

	constructor() {
		this.color = 'rojo';
	}

	handleClick() {
		if (this.color == "rojo") {
			this.color = "amarillo";
		}
		else if(this.color == "amarillo") {
			this.color = "verde";
		}
		else if(this.color == "verde") {
			this.color = "rojo";
		}
	}

}
