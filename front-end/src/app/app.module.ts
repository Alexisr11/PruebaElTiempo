import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatirialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { MenuComponent } from './menu/menu.component';
import { ListadoVendedorComponent } from './vendedores/listado-vendedor/listado-vendedor.component';
import { ListadoCiudadComponent } from './ciudades/listado-ciudad/listado-ciudad.component';
import { CrearCiudadComponent } from './ciudades/crear-ciudad/crear-ciudad.component';
import { FormularioCiudadComponent } from './ciudades/formulario-ciudad/formulario-ciudad.component';
import { EditarCiudadComponent } from './ciudades/editar-ciudad/editar-ciudad.component';
import { EditarVendedorComponent } from './vendedores/editar-vendedor/editar-vendedor.component';
import { CrearVendedorComponent } from './vendedores/crear-vendedor/crear-vendedor.component';
import { FormularioVendedorComponent } from './vendedores/formulario-vendedor/formulario-vendedor.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoVendedorComponent,
    ListadoCiudadComponent,
    CrearCiudadComponent,
    FormularioCiudadComponent,
    EditarCiudadComponent,
    EditarVendedorComponent,
    CrearVendedorComponent,
    FormularioVendedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatirialModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
