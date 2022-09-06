import { Component, OnInit } from '@angular/core';
import { CiudadDto } from '../ciudad';
import { CiudadService } from '../ciudad.service';

@Component({
  selector: 'app-listado-ciudad',
  templateUrl: './listado-ciudad.component.html',
  styleUrls: ['./listado-ciudad.component.css']
})

export class ListadoCiudadComponent implements OnInit {

  ciudadDto: CiudadDto[];
  columnasAmostrar = ['id','nombre','acciones']

  constructor(private ciudadservice: CiudadService) { }

  ngOnInit(): void {
    this.obtenerTodos();  
  }

  obtenerTodos(){
    this.ciudadservice.obtenertodo()
    .subscribe(ciudades => {
      this.ciudadDto = ciudades
      console.log(ciudades)
    }, error => console.log(error))
  }

  borrarCiudad(id: number){
    this.ciudadservice.eliminarCiudad(id).subscribe(() => {
      this.obtenerTodos()
     }, error => console.log(error) )
  }
}
