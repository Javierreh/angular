import { Component, OnInit } from '@angular/core';
import { BlogService } from './../blog.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	formulario: FormGroup;

	constructor(private blogService: BlogService) {
  		this.formulario = new FormGroup({
			titulo: new FormControl('', [
				Validators.required,
				Validators.minLength(2),
				Validators.maxLength(50)
			]),
			texto: new FormControl('', [
				Validators.required,
				Validators.minLength(10),
				Validators.maxLength(1000)
			]),
			autor: new FormControl('', [
				Validators.required
			]),
			imagen: new FormControl('', [
				Validators.required
			]),
			fecha: new FormControl('', [
				Validators.required
			]),
			categoria: new FormControl('', [
				Validators.required
			])
		})
	}

	ngOnInit() {

	}

	onSubmit() {
		this.blogService.agregarPost(this.formulario.value);
		this.formulario.reset();
		console.log('Post Enviado!');
		
	}

}
