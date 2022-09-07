import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoCiudadComponent} from './ciudades/listado-ciudad/listado-ciudad.component';
import { CrearCiudadComponent} from './ciudades/crear-ciudad/crear-ciudad.component';
import { EditarCiudadComponent} from './ciudades/editar-ciudad/editar-ciudad.component';
import { ListadoVendedorComponent} from './vendedores/listado-vendedor/listado-vendedor.component';
import { CrearVendedorComponent} from './vendedores/crear-vendedor/crear-vendedor.component';
import { EditarVendedorComponent} from './vendedores/editar-vendedor/editar-vendedor.component';

const routes: Routes = [
  {path: 'ciudades', component: ListadoCiudadComponent},
  {path: 'crearCiudad', component: CrearCiudadComponent},
  {path: 'editarCiudad/:id', component: EditarCiudadComponent},
  {path: 'vendedores', component: ListadoVendedorComponent},
  {path: 'crearVendedores', component: CrearVendedorComponent},
  {path: 'editarVendedores/:id', component: EditarVendedorComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
