import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ErrorComponent } from './error/error.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { ProductoComponent } from './producto/producto.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RelacionadosComponent } from './relacionados/relacionados.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SaludoComponent,
    ErrorComponent,
    ListaPersonasComponent,
    ProductoComponent,
    ReviewsComponent,
    RelacionadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
