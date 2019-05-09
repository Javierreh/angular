import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	texto: string;

	@Output() todoSent = new EventEmitter();

	constructor() {
		this.texto = '';
	}

	ngOnInit() {
	}

	handleClick() {
		this.todoSent.emit(this.texto);
	}
}
