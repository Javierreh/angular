import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

	token: any;

	constructor(private http: HttpClient) { }

	getAll() {
		return this.http.get('http://neolandshop.ngrok.io/items');
	}

	getProducts(pProducto) {
		return this.http.get('http://neolandshop.ngrok.io/items/' + pProducto);
	}

	getToken() {
		return this.http.post('http://neolandshop.ngrok.io/items/newcart', {});
	}

	addProduct(pToken, pItemId) {
		let headers = new HttpHeaders();
		headers = headers.set('Cart-Token', pToken);
		return this.http.post('http://neolandshop.ngrok.io/items/new', { item_id: pItemId }, { headers: headers });
	}

	showCart(pToken) {
		let headers = new HttpHeaders();
		headers = headers.set('Cart-Token', pToken);
		return this.http.get('http://neolandshop.ngrok.io/items/cart', {headers: headers});
	}

	deleteProduct(pToken, pItemId) {
		let headers = new HttpHeaders();
		headers = headers.set('Cart-Token', pToken);
		return this.http.delete('http://neolandshop.ngrok.io/items/delete/' + pItemId, { headers: headers });
	}

}
