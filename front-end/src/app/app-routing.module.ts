import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoCiudadComponent} from './ciudades/listado-ciudad/listado-ciudad.component';
import { CrearCiudadComponent} from './ciudades/crear-ciudad/crear-ciudad.component';
import { EditarCiudadComponent} from './ciudades/editar-ciudad/editar-ciudad.component';

const routes: Routes = [
  {path: 'ciudades', component: ListadoCiudadComponent},
  {path: 'crearCiudad', component: CrearCiudadComponent},
  {path: 'editarCiudad/:id', component: EditarCiudadComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
