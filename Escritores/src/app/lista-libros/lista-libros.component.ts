import { Component, OnInit, Input } from '@angular/core';
import { EscritoresService } from './../escritores.service';
import { ActivatedRoute } from '@angular/router';
import { Libro } from './../models/libro.model';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

	escritorId: number;
	arrLibros: Libro[];

	constructor(private activatedRoute: ActivatedRoute, private escritoresService: EscritoresService) {
		this.activatedRoute.parent.params.subscribe(params => {
			this.escritorId = params.identificador;
		});
	}

	ngOnInit() {
		this.arrLibros = this.escritoresService.getLibrosbyIdAutor(this.escritorId);
	}

}
