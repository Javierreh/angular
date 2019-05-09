import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  mensaje: string
  msg: string

  constructor() {
    this.mensaje = 'Este es mi mensaje'
  }

  ngOnInit() {
    //this.msg = this.mostrarOtroMensaje()
    setTimeout(() => this.mensaje = "Mensaje cambiado", 5000)
  }

  mostrarOtroMensaje(): string {
    return 'Este es el otro mensaje'
  }

}
