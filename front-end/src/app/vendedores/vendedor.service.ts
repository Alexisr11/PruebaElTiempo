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

  public buscarVendedorPorId(id: number): Observable<VendedorDto> {
    return this.http.get<VendedorDto>(`${this.apiUrl}/${id}`)
  }

  public editarVendedor(id: number, creacionVendedorDto: CreacionVendedorDto){
    console.log(creacionVendedorDto);
    return this.http.put<CreacionVendedorDto>(`${this.apiUrl}/${id}`, creacionVendedorDto);
  }

  public eliminarVendedor(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
