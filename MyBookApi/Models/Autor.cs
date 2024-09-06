using System.ComponentModel.DataAnnotations;

namespace AutoresAPI.Models
{
    public class Autor
    {
        public int AutorID { get; set; }

        [Required]
        [StringLength(50)]
        public required string Nombre { get; set; }

        [Required]
        [StringLength(50)]
        public required string Apellido { get; set; }

        public DateTime? FechaNacimiento { get; set; }

        [StringLength(50)]
        public required string Nacionalidad { get; set; }
    }
}