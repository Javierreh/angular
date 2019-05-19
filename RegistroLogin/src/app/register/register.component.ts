import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistroLoginService } from './../registro-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	formulario: FormGroup;

	constructor(private registroLoginService: RegistroLoginService) {
		this.formulario = new FormGroup({
			name: new FormControl('', [
				Validators.required,
				Validators.minLength(2),
				Validators.maxLength(15)
			]),
			surname: new FormControl('', [
				Validators.required,
				Validators.minLength(2),
				Validators.maxLength(15)
			]),
			username: new FormControl('', [
				Validators.required,
				Validators.minLength(2),
				Validators.maxLength(15)
			]),
			password: new FormControl('', [
				Validators.required,
				Validators.pattern(/^(?=.*\d).{4,8}$/)
			]),
			mail: new FormControl('', [
				Validators.required,
				Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
			]),
			address: new FormControl('', [
				Validators.required,
				Validators.minLength(2),
				Validators.maxLength(15)
			]),
			age: new FormControl('', [
				Validators.required,
				this.edadValidator
			])
		});
	}

  ngOnInit() {
  }


 	edadValidator(control) {
		//Devuelven null si la validación es correcta
		//Devuelve un objeto con el error si la validación no es correcta

		if (control.value >= 18) {
			return null;
		}
		else {
			return { errorEdad: 'La edad debe ser mayor de 18' };
		}
	}

	// passwordValidator(control) {
	// 	if(this.passwordRepeat === control.value) {
	// 		return null;
	// 	}
	// 	else {
	// 		return { errorEmail: 'Error: la contraseña es distinta' };
	// 	}
	// }

	onSubmit() {
		this.registroLoginService.newUser(this.formulario.value).subscribe((res) => {
			console.log(res);
		});
	}

}
