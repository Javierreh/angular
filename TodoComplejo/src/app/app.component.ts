import { Todo } from './models/todo.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	arrTareas: Todo[];

	constructor() {
		this.arrTareas = [];
	}

	handleTodoSent($event) {
		let t = new Todo($event.titulo, $event.descripcion, $event.categoria);
		this.arrTareas.push(t);
		console.log(this.arrTareas);
	}

}
