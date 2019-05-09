import { Component, OnInit } from '@angular/core';
import { PersonasService } from './../personas.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

	arrPersonas: any[];
	persona: any;

	constructor(private personasService: PersonasService) {
		this.arrPersonas = [];
	}

	ngOnInit() {
		// this.arrPersonas = this.personasService.getAll();
		this.arrPersonas = this.personasService.getMayoresEdad();
		this.persona = this.personasService.getByNombre("Raúl");
	}

}
