namespace MyBookApi.Models
{
public class Libro
{
    public int Id { get; set; }
    public string Titulo { get; set; } = string.Empty;  // Default value
    public string ISBN { get; set; } = string.Empty;    // Default value
    public int AutorId { get; set; }
}
}
namespace MyBookApi.Models
{
    public class Libr
    {
        public int Id { get; set; }
        public required string Titulo { get; set; }
        public required string ISBN { get; set; }
        public int AutorId { get; set; }
    }
}
