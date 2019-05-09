import { MainComponent } from './main/main.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ErrorComponent} from './error/error.component';
import { ListaPersonasComponent} from './lista-personas/lista-personas.component';
import { ProductoComponent } from './producto/producto.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RelacionadosComponent } from './relacionados/relacionados.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard} from './login.guard';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: MainComponent },
	{ path: 'hola/:mensaje', component: SaludoComponent },
	{ path: 'saludo', redirectTo: 'hola' },
	{ path: 'lista', component: ListaPersonasComponent, canActivate: [LoginGuard] },
	{ 
		path: 'producto/:identificador',
		component: ProductoComponent,
		children: [
		{ path: 'reviews', component: ReviewsComponent },
		{ path: 'relacionados', component: RelacionadosComponent }
		] 
	},
	{ path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
