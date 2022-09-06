import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrearCiudadDto } from '../ciudad';
import { CiudadService } from '../ciudad.service';

@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent {

  constructor(private router: Router, private servicioCiudad: CiudadService) { }


  guardarCambiosCiudad(crearCiudad: CrearCiudadDto){
    this.servicioCiudad.crearCiudad(crearCiudad)
    .subscribe(() =>  {
      this.router.navigate(["/ciudades"]);
    }, error => console.log(error))
  }
}
