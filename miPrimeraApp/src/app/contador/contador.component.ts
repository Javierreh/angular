import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  // Interpolation
  cont: number
  identificador: string

  @Input("start") inicio: string
  @Input("end") final: string

  @Output() terminado = new EventEmitter()

  constructor() {
    this.identificador = 'cajita'
    this.final = '0'
  }

  ngOnInit() {
    this.cont = parseInt(this.inicio)
  }

  handleClick($event) {
    console.log($event.screenX)
    console.log('Botón pulsado')
    let interval = setInterval(() => {
      this.cont--
      if (this.cont == parseInt(this.final)) {
        clearInterval(interval)
        this.terminado.emit(this.final)
        this.identificador = 'caja'
      }
    }, 1000)
  }

  resetCont() {
    this.cont = 10
  }

}