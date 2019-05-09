import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[subrayado]'
})
export class SubrayadoDirective {

	colores = ['red', 'green', 'blue', 'yellow', 'indigo'];

  constructor(element: ElementRef) {
  	element.nativeElement.style.textDecoration = 'underline';
  	element.nativeElement.style.color = this.colorAleatorio();
  }

  colorAleatorio() {
  	return this.colores[Math.floor(Math.random() * this.colores.length)];
  }

}
