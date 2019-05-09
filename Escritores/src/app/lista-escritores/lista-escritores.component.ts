import { Component, OnInit } from '@angular/core';
import { EscritoresService } from './../escritores.service';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

	arrEscritores: any[];

	constructor(private escritoresService: EscritoresService) { }

	ngOnInit() {
		this.arrEscritores = this.escritoresService.getAll();
	}
}
