using AutoMapper;
using back_end.DTOs;
using back_end.Entidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/ciudad")]
    [ApiController]
    public class CiudadController : ControllerBase
    {
        public readonly ILogger<CiudadController> logger;
        private readonly IMapper mapper;

        public AplicationDbContext Context { get; }

        public CiudadController(ILogger<CiudadController> logger,
            AplicationDbContext context, IMapper mapper)
        {
            this.logger = logger;
            Context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<CiudadDto>>> Get()
        {
            var queryable = Context.Ciudad.AsQueryable();
            var ciudad = await queryable.OrderBy(x => x.NOMBRE).ToListAsync();
            return mapper.Map<List<CiudadDto>>(ciudad);
        }

        [HttpPost]
        public async Task<ActionResult> Post(CreacionCiudadDto creacionCiudadDto)
        {
            var ciudad = mapper.Map<Ciudad>(creacionCiudadDto);
            Context.Add(ciudad);
            await Context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<CiudadDto>> Get(int id)
        {
            var ciudad = await Context.Ciudad.FirstOrDefaultAsync(x => x.ID == id);

            if (ciudad == null)
            {
                return NotFound();
            }

            return mapper.Map<CiudadDto>(ciudad);
        }

        [HttpPut]
        public async Task<ActionResult<CiudadDto>> Put(int id, CreacionCiudadDto creacionCiudadDto)
        {
            var ciudad = await Context.Ciudad.FirstOrDefaultAsync(x => x.ID == id);

            if (ciudad == null)
                return NotFound();

            ciudad = mapper.Map(creacionCiudadDto, ciudad);
            await Context.SaveChangesAsync();
            return NotFound();
        }


        [HttpDelete]
        public async Task<ActionResult<CiudadDto>> Delete(int id)
        {
            var ciudad = await Context.Ciudad.AnyAsync(x => x.ID == id);

            if (ciudad == null)
                return NotFound();

            Context.Remove(new Ciudad { ID = id});
            await Context.SaveChangesAsync();
            return NotFound();
        }
            
    }
}
