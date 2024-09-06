
---

# Prueba Desarrollador 👩‍💻

---

### Parte II: API RESTful en .NET 🔎

Este proyecto consiste en la implementación de un **API RESTful** utilizando .NET y una base de datos MySQL. El objetivo es permitir la gestión de libros y autores mediante una serie de **endpoints** para realizar operaciones CRUD (crear, leer, actualizar y eliminar).

#### **Endpoints implementados:**

1. **Crear un libro (POST)**
   - **Ruta**: `https://localhost:3306/api/libros`
   - **Descripción**: Permite agregar un nuevo libro a la base de datos.
   - **Request Body**:
     ```json
     {
       "titulo": "Nombre del libro",
       "isbn": "9781234567890",
       "autorId": 1
     }
     ```

2. **Obtener todos los libros (GET)**
   - **Ruta**: `https://localhost:3306/api/libros`
   - **Descripción**: Devuelve una lista con todos los libros almacenados.

3. **Obtener un libro por ID (GET)**
   - **Ruta**: `https://localhost:3306/api/libros/{id}`
   - **Descripción**: Devuelve la información de un libro específico según su ID.

4. **Actualizar un libro (PUT)**
   - **Ruta**: `https://localhost:3306/api/libros/{id}`
   - **Descripción**: Permite actualizar la información de un libro existente.
   - **Request Body**:
     ```json
     {
       "titulo": "Nuevo nombre del libro",
       "isbn": "9789876543210",
       "autorId": 2
     }
     ```

5. **Eliminar un libro (DELETE)**
   - **Ruta**: `https://localhost:3306/api/libros/{id}`
   - **Descripción**: Elimina un libro específico de la base de datos.

### 🕵️‍♀️ ¿Cómo ejecutar? 🕵️‍♀️

1. Tener instalado **.NET Core SDK** (https://dotnet.microsoft.com/download). 
2. Tener acceso a una instancia de **MySQL** (https://dev.mysql.com/downloads/installer).

**Configuración de la base de datos**:
   - Asegúrate de que la base de datos MySQL esté ejecutándose.
   - En el archivo `appsettings.json`, configura la cadena de conexión:
     ```json
     {
       "ConnectionStrings": {
         "DefaultConnection": "Server=localhost;Database=tienda_db;User=root;Password=tu_contraseña;"
       }
     }
     ```

**Migraciones y creación de la base de datos**:
   Navega a la carpeta del proyecto y ejecuta los siguientes comandos:
   ```bash
   dotnet ef migrations add InitialCreate
   dotnet ef database update
   ```

**Ejecutar el proyecto**:
   - Una vez configurada la base de datos, inicia el servidor ejecutando:
     ```bash
     dotnet run
     ```
   - El API estará disponible en `https://localhost:3306/api/libros`.

### 🤓 Tecnología Utilizada 🤓
- **Framework**: .NET Core 8
- **Base de Datos**: MySQL
- **ORM**: Entity Framework Core
- **IDE**: Visual Studio Code
- **Cliente API**: Postman para pruebas de endpoints

---

**Nos vemos pronto!ヾ(＾ ∇ ＾).**

---

