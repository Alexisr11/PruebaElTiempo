using back_end.Utilidades;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Entidades
{
    public class Vendedor
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public string documento { get; set; }
        public int CiudadId { get; set; }
        public Ciudad Ciudad { get; set; }
    }
}
