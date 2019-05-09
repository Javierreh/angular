import { Injectable } from '@angular/core';
import { ESCRITORES } from './db/escritores.db';
import { LIBROS } from './db/libros.db';
import { Libro } from './models/libro.model'

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

	constructor() {
	}

	getAll() {
		return ESCRITORES;
	}

	getById(pIdAutor) {
		return ESCRITORES.find(item => item.id == pIdAutor);
	}

	getLibrosbyIdAutor(pIdAutor) {
		return LIBROS.filter(item => item.escritor == pIdAutor);
	}

}
