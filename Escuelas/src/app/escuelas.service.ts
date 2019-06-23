import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EscuelasService {

	constructor(private http: HttpClient) { }

	getAll() {
		return this.http.get('http://localhost:3000/api/alumnos');
	}

	insertarAlumno(pFormulario) {
		return this.http.post('http://localhost:3000/api/alumnos', pFormulario);
	}

	// eliminarAlumno(pFormulario) {
		
	// }

}
