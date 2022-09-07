import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { CreacionVendedorDto, VendedorDto } from './vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + 'vendedor';

  public obtenertodo(): Observable<VendedorDto[]>{
    return this.http.get<VendedorDto[]>(this.apiUrl)
  }

  public crearVendedor(vendedor: CreacionVendedorDto){
    console.log(vendedor)
    return this.http.post(this.apiUrl, vendedor);
  }

  /*public buscarCiudadPorId(id: number): Observable<CiudadDto> {
    return this.http.get<CiudadDto>(`${this.apiUrl}/${id}`)
  }

  public editarCiudad(id: number, creacionCiudadDto: CrearCiudadDto){
    console.log(creacionCiudadDto);
    return this.http.put<CiudadDto>(`${this.apiUrl}/${id}`, creacionCiudadDto);
  }

  public eliminarCiudad(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  } */
}
