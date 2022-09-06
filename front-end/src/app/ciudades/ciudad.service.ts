import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CiudadDto, CrearCiudadDto } from './ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + 'ciudad';

  public obtenertodo(): Observable<CiudadDto[]>{
    return this.http.get<CiudadDto[]>(this.apiUrl);
  }

  public crearCiudad(ciudad: CrearCiudadDto){
    console.log(ciudad)
    return this.http.post(this.apiUrl, ciudad);
  }

  public buscarCiudadPorId(id: number): Observable<CiudadDto> {
    return this.http.get<CiudadDto>(`${this.apiUrl}/${id}`)
  }

  public editarCiudad(id: number, creacionCiudadDto: CrearCiudadDto){
    console.log(creacionCiudadDto);
    return this.http.put<CiudadDto>(`${this.apiUrl}/${id}`, creacionCiudadDto);
  }

  public eliminarCiudad(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
