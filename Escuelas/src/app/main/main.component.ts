import { Component, OnInit } from '@angular/core';
import { EscuelasService } from './../escuelas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	alumnos: any;

	constructor(private escuelasService: EscuelasService) { }

	ngOnInit() {

		this.escuelasService.getAll().subscribe((res) => {
			this.alumnos = res;
		});
	}

}
