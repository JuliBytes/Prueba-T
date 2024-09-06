
USE tienda_db;
-- Crear tabla Autores
CREATE TABLE Autores (
    AutorID INT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    FechaNacimiento DATE,
    Nacionalidad VARCHAR(50),
    CONSTRAINT UQ_Autor UNIQUE (Nombre, Apellido)
);

-- Crear tabla Libros
CREATE TABLE Libros (
    LibroID INT PRIMARY KEY,
    Titulo VARCHAR(100) NOT NULL,
    ISBN VARCHAR(13) UNIQUE,
    AnioPublicacion INT,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autores(AutorID)
);

-- Crear tabla Categorias
CREATE TABLE Categorias (
    CategoriaID INT PRIMARY KEY,
    NombreCategoria VARCHAR(50) NOT NULL UNIQUE
);

-- Crear tabla de relación muchos a muchos entre Libros y Categorias
CREATE TABLE LibrosCategorias (
    LibroID INT,
    CategoriaID INT,
    PRIMARY KEY (LibroID, CategoriaID),
    FOREIGN KEY (LibroID) REFERENCES Libros(LibroID),
    FOREIGN KEY (CategoriaID) REFERENCES Categorias(CategoriaID)
);