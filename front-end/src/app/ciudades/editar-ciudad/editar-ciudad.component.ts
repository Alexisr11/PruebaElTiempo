import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadDto, CrearCiudadDto } from '../ciudad';
import { CiudadService } from '../ciudad.service';

@Component({
  selector: 'app-editar-ciudad',
  templateUrl: './editar-ciudad.component.html',
  styleUrls: ['./editar-ciudad.component.css']
})
export class EditarCiudadComponent implements OnInit {
  
  constructor(private router: Router, 
    private ciudadService: CiudadService,
    private activatedRoute: ActivatedRoute) { }

  modelo: CiudadDto;
  errores: string[] = [];
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.ciudadService.buscarCiudadPorId(params.id)
      .subscribe(ciudad => {
        this.modelo = ciudad;
        console.log(this.modelo);
      }, () => this.router.navigate(['/ciudades']))
    });
  }

  guardarCambios(ciudad: CrearCiudadDto){
      this.ciudadService.editarCiudad(this.modelo.id, ciudad)
      .subscribe(() => {
        this.router.navigateByUrl('/ciudades');
      }, error => console.log(error))
  }
}
