-- Consulta con INNER JOIN
SELECT L.Titulo, A.Nombre, A.Apellido
FROM Libros L
INNER JOIN Autores A ON L.AutorID = A.AutorID;

-- Consulta con LEFT JOIN
SELECT A.Nombre, A.Apellido, L.Titulo
FROM Autores A
LEFT JOIN Libros L ON A.AutorID = L.AutorID;

-- Consulta con UNION
SELECT 'Autor' AS Tipo, Nombre || ' ' || Apellido AS Nombre
FROM Autores
UNION
SELECT 'Categoria' AS Tipo, NombreCategoria AS Nombre
FROM Categorias;

-- Consulta con CASE
SELECT L.Titulo,
       CASE 
           WHEN L.AnioPublicacion < 1960 THEN 'Clásico'
           WHEN L.AnioPublicacion BETWEEN 1960 AND 1980 THEN 'Moderno'
           ELSE 'Contemporáneo'
       END AS Epoca
FROM Libros L;