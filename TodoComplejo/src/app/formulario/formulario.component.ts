import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	@Output() todoSent = new EventEmitter();

	tareaTmp: any;

	constructor() {
		this.tareaTmp = {};
	}

	ngOnInit() {
	}

	handleClick() {
		this.todoSent.emit(this.tareaTmp);
		this.tareaTmp = {};
	}

}
