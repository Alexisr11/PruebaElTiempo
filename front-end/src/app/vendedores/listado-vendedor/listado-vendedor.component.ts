import { Component, OnInit } from '@angular/core';
import { CiudadService } from 'src/app/ciudades/ciudad.service';
import { VendedorDto } from '../vendedor';
import { VendedorService } from '../vendedor.service';

@Component({
  selector: 'app-listado-vendedor',
  templateUrl: './listado-vendedor.component.html',
  styleUrls: ['./listado-vendedor.component.css']
})
export class ListadoVendedorComponent implements OnInit {

  vendedorDto: VendedorDto[];
  columnasAmostrar = ['id','nombre','apellido','documento','ciudad','acciones']

  constructor(private venderoService: VendedorService) { }

  ngOnInit(): void {
    this.obtenerTodos();  
  }

  obtenerTodos(){
    this.venderoService.obtenertodo()
    .subscribe(vendedores => {
      this.vendedorDto = vendedores
      console.log(vendedores);
    }, error => console.log(error))
  }

 
  borrarVendedor(id: number){
    this.venderoService.eliminarVendedor(id).subscribe(() => {
      this.obtenerTodos()
     }, error => console.log(error) )
  }

}
