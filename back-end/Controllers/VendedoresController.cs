using AutoMapper;
using back_end.DTOs;
using back_end.Entidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/vendedor")]
    [ApiController]
    public class VendedoresController: ControllerBase
    {
        public readonly ILogger<VendedoresController> logger;
        private readonly IMapper mapper;

        public AplicationDbContext Context { get; }

        public VendedoresController(ILogger<VendedoresController> logger,
            AplicationDbContext context, IMapper mapper)
        {
            this.logger = logger;
            Context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<VendedorDto>>> Get()
        {
            var queryable = Context.Vendedor.Include(c => c.Ciudad).AsQueryable();
            var vendedor = await queryable.OrderBy(x => x.nombre).ToListAsync();
            return mapper.Map<List<VendedorDto>>(vendedor);
        }

        [HttpPost]
        public async Task<ActionResult> Post(CreacionVendedorDto creacionVendedorDto)
        {
            var vendedor = mapper.Map<Vendedor>(creacionVendedorDto);

            Context.Add(vendedor);
            await Context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<VendedorDto>> Get(int id)
        {
            var vendedor = await Context.Vendedor.Include(c => c.Ciudad)
                .FirstOrDefaultAsync(x => x.id == id);

            if (vendedor == null)
            {
                return NotFound();
            }

            return mapper.Map<VendedorDto>(vendedor);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<VendedorDto>> Put(int id, CreacionVendedorDto creacionVendedorDto)
        {
            var vendedor = await Context.Vendedor.FirstOrDefaultAsync(x => x.id == id);

            if (vendedor == null)
                return NotFound();

            vendedor = mapper.Map(creacionVendedorDto, vendedor);
            await Context.SaveChangesAsync();
            return NoContent();
        }


        [HttpDelete("{id:int}")]
        public async Task<ActionResult<CiudadDto>> Delete(int id)
        {
            var vendedor = await Context.Vendedor.AnyAsync(x => x.id == id);

            if (vendedor == null)
                return NotFound();

            Context.Remove(new Vendedor() { id = id });
            await Context.SaveChangesAsync();
            return NoContent();
        }
    }
}
