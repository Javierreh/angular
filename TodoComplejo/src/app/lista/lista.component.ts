import { Todo } from './../models/todo.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

	@Input() tareas: Todo[];

	constructor() {
		this.tareas = [];
	}

	ngOnInit() {
	}

	marcarCompleta(tarea) {
		tarea.completa = !tarea.completa;
	}

}
