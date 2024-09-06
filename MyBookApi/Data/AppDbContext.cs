using Microsoft.EntityFrameworkCore;
using MyBookApi.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Libro> Libros { get; set; }
}
