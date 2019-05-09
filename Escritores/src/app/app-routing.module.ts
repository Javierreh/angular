import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';
import { EscritorComponent } from './escritor/escritor.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';


const routes: Routes = [
	{ path: 'lista', component: ListaEscritoresComponent },
	{
		path: 'escritor/:identificador',
		component: EscritorComponent,
		children: [
			{ path: 'libros', component: ListaLibrosComponent }
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
