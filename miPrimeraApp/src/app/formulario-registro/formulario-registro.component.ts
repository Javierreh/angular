import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  persona: any

  constructor() {
    this.persona = {
      nombre: 'Raúl'
    }
  }

  ngOnInit() {
  }

  handleClick() {
    console.log(this.persona)
  }

}
