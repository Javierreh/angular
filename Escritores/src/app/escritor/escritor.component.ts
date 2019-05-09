import { Component, OnInit, Output } from '@angular/core';
import { EscritoresService } from './../escritores.service';
import { ActivatedRoute } from '@angular/router';
import { Escritor } from './../models/escritor.model';

@Component({
  selector: 'app-escritor',
  templateUrl: './escritor.component.html',
  styleUrls: ['./escritor.component.css']
})
export class EscritorComponent implements OnInit {

	escritorId: number;
	escritor: Escritor;

  constructor(private activatedRoute: ActivatedRoute, private escritoresService: EscritoresService) {
  	this.activatedRoute.params.subscribe(params => {
  		this.escritorId = params.identificador;
  	});
  }

  ngOnInit() {
  	this.escritor = this.escritoresService.getById(this.escritorId);
  }

}
