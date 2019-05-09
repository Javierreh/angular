import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Definición de propiedades
  numeros: number[]

  constructor() {
    this.numeros = [4, 10, 9, 8]
  }

  handleTerminado($event) {
    console.log(`Ha terminado el contador en ${$event}`)
  }

  handleTotal($event) {
    console.log(`El resultado de la suma es ${$event}`)
  }

}
