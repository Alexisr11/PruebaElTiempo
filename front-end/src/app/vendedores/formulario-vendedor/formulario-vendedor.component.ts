import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CiudadDto } from 'src/app/ciudades/ciudad';
import { CiudadService } from 'src/app/ciudades/ciudad.service';
import { CreacionVendedorDto } from '../vendedor';

@Component({
  selector: 'app-formulario-vendedor',
  templateUrl: './formulario-vendedor.component.html',
  styleUrls: ['./formulario-vendedor.component.css']
})
export class FormularioVendedorComponent implements OnInit {

  form: FormGroup;
  ciudad: CiudadDto[];

  @Input()
  modelo: CreacionVendedorDto;

  @Output()
  onSubmit: EventEmitter<CreacionVendedorDto> = new EventEmitter<CreacionVendedorDto>();
  
  constructor(private formBuilder: FormBuilder,
    private servicioCiudad: CiudadService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
          validators:[ Validators.required]
      }],
      apellido: ['', {
        validators:[ Validators.required]
      }],
      documento: ['', {
        validators:[ Validators.required]
      }],
      CiudadId: ['', {
        validators:[ Validators.required]
      }],
    })

    this.obtenerTodasCiudades();

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambiosVendedor(){
    this.onSubmit.emit(this.form.value)
  }

  obtenerTodasCiudades(){
    this.servicioCiudad.obtenertodo()
    .subscribe(ciudades => {
      this.ciudad = ciudades
      console.log(ciudades)
    }, error => console.log(error))
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if (campo.hasError('required')){
        return 'El campo Nombre es Requerido !!';
    }
  }

  obtenerErrorCampoApellido(){
    var campo = this.form.get('apellido');
    if (campo.hasError('required')){
        return 'El campo Apellido es Requerido !!';
    }
  }

  obtenerErrorCampoDocumento(){
    var campo = this.form.get('documento');
    if (campo.hasError('required')){
        return 'El campo Documento es Requerido !!';
    }
  }

  obtenerErrorCampoCiudad(){
    var campo = this.form.get('CiudadId');
    if (campo.hasError('required')){
        return 'El campo Ciudad es Requerido !!';
    }
  }
}
