import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreacionVendedorDto, VendedorDto } from '../vendedor';
import { VendedorService } from '../vendedor.service';

@Component({
  selector: 'app-editar-vendedor',
  templateUrl: './editar-vendedor.component.html',
  styleUrls: ['./editar-vendedor.component.css']
})
export class EditarVendedorComponent implements OnInit {

  constructor(private router: Router, 
    private servicioVendedor: VendedorService,
    private activatedRoute: ActivatedRoute) { }

  modelo: VendedorDto;
  errores: string[] = [];
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.servicioVendedor.buscarVendedorPorId(params.id)
      .subscribe(vendedor => {
        this.modelo = vendedor;
        console.log(this.modelo);
      }, () => this.router.navigate(['/vendedores']))
    });
  }

  guardarCambios(vendedor: CreacionVendedorDto){
      this.servicioVendedor.editarVendedor(this.modelo.id, vendedor)
      .subscribe(() => {
        this.router.navigateByUrl('/vendedores');
      }, error => console.log(error))
  }

}
