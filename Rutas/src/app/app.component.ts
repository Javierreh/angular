import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private router: Router) {

	}

	handleClick(ruta) {
		this.router.navigate([ruta]);
	}

}


// sin nada: solo en el constructor
// private: solo en el constructor y en el resto de metodos de la clase
// public: se puede utilizar en el constructor, metodos y en el html del componente