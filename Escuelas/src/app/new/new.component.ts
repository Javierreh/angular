import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EscuelasService } from './../escuelas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

	formulario: FormGroup;

	constructor(private escuelasService: EscuelasService, private router: Router) {

		this.formulario = new FormGroup({
			nombre: new FormControl('', [
				Validators.required
			]),
			apellidos: new FormControl('', [
				Validators.required
			]),
			email: new FormControl('', [
				Validators.required
			]),
			edad: new FormControl('', [
				Validators.required
			]),
			matricula: new FormControl('', [
				Validators.required
			]),
			notamedia: new FormControl('', [
				Validators.required
			]),
			sexo: new FormControl('', [
				Validators.required
			])
		});
	}

	ngOnInit() {
	}

	onSubmit() {
		this.escuelasService.insertarAlumno(this.formulario.value).subscribe((res) => {
			console.log(res);
			this.formulario.reset();
			if (res['exito']) {
				this.router.navigate(['/main']);
			}
		});
	}

}