import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrearCiudadDto } from '../ciudad';

@Component({
  selector: 'app-formulario-ciudad',
  templateUrl: './formulario-ciudad.component.html',
  styleUrls: ['./formulario-ciudad.component.css']
})
export class FormularioCiudadComponent implements OnInit {

  form: FormGroup;

  @Input()
  modelo: CrearCiudadDto;

  @Output()
  onSubmit: EventEmitter<CrearCiudadDto> = new EventEmitter<CrearCiudadDto>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
          validators:[ Validators.required]
      }]
    })

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
  
  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if (campo.hasError('required')){
        return 'El campo Nombre es Requerido !!';
    }
  }

  guardarCambiosCiudad(){
    this.onSubmit.emit(this.form.value)
  }
}
