import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreacionVendedorDto } from '../vendedor';
import { VendedorService } from '../vendedor.service';

@Component({
  selector: 'app-crear-vendedor',
  templateUrl: './crear-vendedor.component.html',
  styleUrls: ['./crear-vendedor.component.css']
})
export class CrearVendedorComponent {

  constructor(private router: Router, private vendedorServicio: VendedorService) { }


  guardarCambiosCiudad(crearVendedor: CreacionVendedorDto){
    console.log(crearVendedor);
    this.vendedorServicio.crearVendedor(crearVendedor)
    .subscribe(() =>  {
      this.router.navigate(["/vendedores"]);
    }, error => console.log(error))
  }

}
