export class Empleado {
	nombre: string;
	apellidos: string;
	imagen: string;
	departamento: string;

	constructor(pNombre, pApellidos, pDepartamento, pImagen) {
		this.nombre = pNombre;
		this.apellidos = pApellidos;
		this.departamento = pDepartamento;
		this.imagen = pImagen;
	}
	
}