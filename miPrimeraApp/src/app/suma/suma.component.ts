import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input("a") sum1: string
  @Input("b") sum2: string

  @Output() total = new EventEmitter()

  resultado: number

  constructor() { }

  ngOnInit() {
    this.resultado = 0;
  }

  handleClickResult() {
    this.resultado = parseInt(this.sum1) + parseInt(this.sum2)
    this.total.emit(this.resultado)
  }

}
