import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

	formulario: FormGroup;

	constructor() {
		this.formulario = new FormGroup({
			nombre: new FormControl('', [
				Validators.required,
				Validators.minLength(2),
				Validators.maxLength(15)
			]),
			apellidos: new FormControl('', [
				Validators.required
			]),
			email: new FormControl('', [
				Validators.required,
				Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
			]),
			edad: new FormControl('', [
				Validators.required,
				this.edadValidator
			]),
			dni: new FormControl('', [
				Validators.required,
				this.dniValidator
			]),
			password: new FormControl('', [
				Validators.required,
				Validators.pattern(/^(?=.*\d).{4,8}$/)
			]),
			password_repeat: new FormControl('')
		
		}, [this.passwordRepeatValidator]);
	}

	ngOnInit() {

		let controlNombre = this.formulario.controls['nombre'];
		controlNombre.valueChanges.pipe(debounceTime(400)).subscribe((value) => {
			console.log(value);
		});
	}

	passwordRepeatValidator(pForm: FormGroup) {
		let passwordValue = pForm.controls['password'].value;
		let passwordRepeatValue = pForm.controls['password_repeat'].value;
		console.log(passwordValue, passwordRepeatValue);

		if (passwordValue === passwordRepeatValue) return null;
		return { password_repeat: 'Las claves deben ser iguales.' };
	}

	edadValidator(control) {
		//Devuelven null si la validación es correcta
		//Devuelve un objeto con el error si la validación no es correcta

		// console.log(control.value);

		if (control.value >= 18) {
			return null;
		}
		else {
			return { errorEdad: 'La edad debe ser mayor de 18' };
		}
	}

	dniValidator(control) {
		var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
		var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
		var nieRexp = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
		var str = control.value.toString().toUpperCase();

		if (!nifRexp.test(str) && !nieRexp.test(str)) return { errorDni: 'El DNI no es válido' };

		var nie = str
		    .replace(/^[X]/, '0')
		    .replace(/^[Y]/, '1')
		    .replace(/^[Z]/, '2');

		var letter = str.substr(-1);
		var charIndex = parseInt(nie.substr(0, 8)) % 23;

		if (validChars.charAt(charIndex) === letter) return null;

		return { errorDni: 'El DNI no es válido' };
	}

	onSubmit() {
		console.log(this.formulario.value);
	}

}
