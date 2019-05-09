import { Producto } from './models/producto.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	arrComida: Producto[];
	arrBebida: Producto[];
	productosElegidos: Producto[];

	constructor() {
		this.arrComida = [
			new Producto('Patatas Bravas', 4.5, 'https://s3.eestatic.com/2015/02/15/cocinillas/Cocinillas_11258928_115867835_1706x960.jpg'),
			new Producto('Huevos Rotos', 12.5, 'https://t2.rg.ltmcdn.com/es/images/3/9/7/huevos_rotos_con_patatas_y_jamon_serrano_69793_600.jpg'),
			new Producto('Arroz con cosas', 10.5, 'https://emtstatic.com/2016/07/dreamstime_s_5802489.jpg')
		];

		this.arrBebida = [
			new Producto('Coca-Cola', 1.2, 'http://www.atleticocuellar.es/wp-content/uploads/2016/02/Disco-Coca-Cola-v1.jpg'),
			new Producto('Aquarius', 2, 'https://pbs.twimg.com/profile_images/862984360848445440/FUE-ej6p_400x400.jpg'),
			new Producto('Fanta de Naranja', 1.5, 'https://www.lagrosella.es/wp-content/uploads/2016/04/fanta-naranja-e1462993808577.jpg')
		];

		this.productosElegidos = [];
	}


	handleProductoSent($event) {
		let p = new Producto($event.nombre, $event.precio, $event.imagen);
		this.productosElegidos.push(p);
		
		// console.log(this.productosElegidos);
	}
}
