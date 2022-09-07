using AutoMapper;
using back_end.DTOs;
using back_end.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Utilidades
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Ciudad, CiudadDto>().ReverseMap();
            CreateMap<Ciudad, CreacionCiudadDto>().ReverseMap();
            CreateMap<Vendedor, VendedorDto>().ReverseMap();
            CreateMap<Vendedor, CreacionVendedorDto>().ReverseMap();
                
        }


        //private CiudadDto MapearVendedirCiudad(Vendedor vendedor, VendedorDto vendedorDto, CiudadDto ciudadDto)
        //{
        //    var resultado = new CiudadDto();

        //    if (vendedor.CiudadId != 0)
        //    {
        //        new CiudadDto() { id = vendedorDto.id, nombre = vendedorDto.Ciudad.nombre };
        //    }

        //    return resultado;
        //}
    }
}
