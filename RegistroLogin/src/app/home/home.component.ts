import { Component, OnInit } from '@angular/core';
import { RegistroLoginService } from './../registro-login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private registroLoginService: RegistroLoginService) { }

	ngOnInit() {

	}

	handleClick() {
		this.registroLoginService.getPremio().subscribe((res) => {
			console.log(res);
		});
	}

}
