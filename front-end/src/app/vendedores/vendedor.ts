import { CiudadDto } from "../ciudades/ciudad";

export interface VendedorDto{
    id: number;
    nombre: string;
    apellido: string;
    documento: string;
    ciudad: CiudadDto[];
}

export interface CreacionVendedorDto{
    nombre: string;
    apellido: string;
    documento: string;
    ciudadId: number;
}