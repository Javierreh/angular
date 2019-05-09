import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormularioSimpleComponent } from './formulario-simple/formulario-simple.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { SumaComponent } from './suma/suma.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ContadorComponent,
    CalculadoraComponent,
    FormularioSimpleComponent,
    FormularioRegistroComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
