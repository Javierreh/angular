export class Todo {

	titulo: string;
	descripcion: string;
	categoria: string;
	completa: boolean;

	constructor(pTitulo, pDescripcion, pCategoria) {
		this.titulo = pTitulo;
		this.descripcion = pDescripcion;
		this.categoria = pCategoria;
		this.completa = false;
	}

}