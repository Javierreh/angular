import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

	@Input() tareas: string[];

  constructor() { }

  ngOnInit() {
  }

  mostrarTareas() {
  	let res = '<ul>';

  	for (let i = 0; i < this.tareas.length; i++) {
  		res += `<li>${this.tareas[i]}</li>`;
  	}

  	res += '</ul>';
  	
  	return res;
  }

}
