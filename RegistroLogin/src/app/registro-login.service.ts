import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroLoginService {

  constructor(private http: HttpClient) { }

  getPremio() {
  	let headers = new HttpHeaders();
	  headers = headers.set('user-token', 'EDr¡W¿54gQ8Zz%xES8Ee');
  	return this.http.get('http://registrate.ngrok.io/premio', { headers: headers });
  }

  newUser(pFormulario) {
  	return this.http.post('http://registrate.ngrok.io/register', pFormulario);
  }

  loginUser(pFormulario) {
  	return this.http.post('http://registrate.ngrok.io/login', pFormulario);
  }

		
		 

}
