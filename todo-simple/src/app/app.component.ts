import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 	arrTareas: string[];
 	
 	constructor() {
 		this.arrTareas = [];
 	}

	handleTodoSent($event) {
		let newTarea = `${$event}`;
		this.arrTareas.push(newTarea);
		console.log(this.arrTareas);
	}

}