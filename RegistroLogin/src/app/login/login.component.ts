import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistroLoginService } from './../registro-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	formulario: FormGroup;

	constructor(private registroLoginService: RegistroLoginService) {
		this.formulario = new FormGroup({
			username: new FormControl('', [
				Validators.required
			]),
			password: new FormControl('', [
				Validators.required
			])
		})
	}

	ngOnInit() {
	}

	onSubmit() {
		this.registroLoginService.loginUser(this.formulario.value).subscribe((res) => {
			console.log(res);
		});
	}

}
