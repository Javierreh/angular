import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-simple',
  templateUrl: './formulario-simple.component.html',
  styleUrls: ['./formulario-simple.component.css']
})
export class FormularioSimpleComponent implements OnInit {

  inputValue: string
  inputValue2: string

  constructor() {
    this.inputValue = 'Este es mi valor'
    this.inputValue2 = 'Valor cambiante'
  }

  ngOnInit() {
  }

  handleClick() {
    this.inputValue = 'Otro valor diferente'
  }

}
