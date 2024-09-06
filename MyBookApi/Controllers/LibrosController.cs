using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyBookApi.Models;

[Route("api/[controller]")]
[ApiController]
public class LibrosController : ControllerBase
{
    private readonly AppDbContext _context;

    public LibrosController(AppDbContext context)
    {
        _context = context;
    }

    // POST: api/Libros
    [HttpPost]
    public async Task<ActionResult<Libro>> Create(Libro libro)
    {
        _context.Libros.Add(libro);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = libro.Id }, libro);
    }

    // GET: api/Libros
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Libro>>> GetAll()
    {
        return await _context.Libros.ToListAsync();
    }

    // GET: api/Libros/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Libro>> GetById(int id)
    {
        var libro = await _context.Libros.FindAsync(id);

        if (libro == null)
        {
            return NotFound();
        }

        return libro;
    }

    // PUT: api/Libros/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Libro libro)
    {
        if (id != libro.Id)
        {
            return BadRequest();
        }

        _context.Entry(libro).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/Libros/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var libro = await _context.Libros.FindAsync(id);
        if (libro == null)
        {
            return NotFound();
        }

        _context.Libros.Remove(libro);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
