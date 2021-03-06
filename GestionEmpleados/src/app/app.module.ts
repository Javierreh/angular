import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaEmpleadosComponent,
    DetalleEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
