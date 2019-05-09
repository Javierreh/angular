import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: string
  igualPulsado: boolean

  constructor() {
    this.resultado = '0'
    this.igualPulsado = false
  }

  ngOnInit() {
  }

  handleClick(item) {
    if (this.resultado == '0' || this.igualPulsado) {
      this.resultado = item
      this.igualPulsado = false
    } else {
      this.resultado += item
    }
  }

  handleClickIgual() {
    this.resultado = eval(this.resultado)
    this.igualPulsado = true
  }

}
