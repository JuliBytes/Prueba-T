-- Insertar datos en la tabla Autores
INSERT INTO Autores (AutorID, Nombre, Apellido, FechaNacimiento, Nacionalidad) VALUES
(1, 'Gabriel', 'García Márquez', '1927-03-06', 'Colombiana'),
(2, 'Jorge Luis', 'Borges', '1899-08-24', 'Argentina'),
(3, 'Isabel', 'Allende', '1942-08-02', 'Chilena'),
(4, 'Julio', 'Cortázar', '1914-08-26', 'Argentina'),
(5, 'Mario', 'Vargas Llosa', '1936-03-28', 'Peruana');

-- Insertar datos en la tabla Libros
INSERT INTO Libros (LibroID, Titulo, ISBN, AnioPublicacion, AutorID) VALUES
(1, 'Cien años de soledad', '9780307474728', 1967, 1),
(2, 'El Aleph', '9780142437883', 1949, 2),
(3, 'La casa de los espíritus', '9780525433477', 1982, 3),
(4, 'Rayuela', '9788437604572', 1963, 4),
(5, 'La ciudad y los perros', '9788420471830', 1963, 5);

-- Insertar datos en la tabla Categorias
INSERT INTO Categorias (CategoriaID, NombreCategoria) VALUES
(1, 'Realismo mágico'),
(2, 'Ficción'),
(3, 'Literatura latinoamericana'),
(4, 'Novela'),
(5, 'Cuento');

-- Insertar datos en la tabla LibrosCategorias
INSERT INTO LibrosCategorias (LibroID, CategoriaID) VALUES
(1, 1), (1, 3), (1, 4),
(2, 2), (2, 3), (2, 5),
(3, 2), (3, 3), (3, 4),
(4, 2), (4, 3), (4, 4),
(5, 2), (5, 3), (5, 4);