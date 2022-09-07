using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class CreacionVendedorDto
    {
        public string nombre { get; set; }
        public string apellido { get; set; }
        public string documento { get; set; }
        public int CiudadId { get; set; }
    }
}
