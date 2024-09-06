
---

# Prueba Desarrollador 👩‍💻

### Parte I: Bases de datos 📚
Este proyecto demuestra la implementación de un sistema de gestión de biblioteca utilizando bases de datos relacionales. A continuación se detalla cada componente desarrollado:

1. **Diseño de la base de datos**:
   - Creación de tres tablas principales: **Autores**, **Libros** y **Categorías**.
   - Implementación de una tabla de unión (**LibrosCategorias**) para manejar la relación muchos a muchos entre Libros y Categorías.

2. **Creación de tablas**:
   - Se han definido las estructuras de las tablas con sus respectivos campos y tipos de datos.
   - Implementación de restricciones (**Constraints**) como **Primary Keys** y **Foreign Keys**.
   - Valores por defecto (implícitos en la definición de las columnas).
   - Valores únicos (**UNIQUE**) para el par **Nombre** y **Apellido** en Autores, **ISBN** en Libros, y **NombreCategoria** en Categorías.

3. **Script de carga de datos**:
   - Se generó un script para cargar al menos 5 registros en cada tabla.

4. **Consultas avanzadas**:
   - Implementación de consultas utilizando **JOIN** (INNER y LEFT).
   - Uso de la cláusula **UNION** en consultas.
   - Aplicación de la cláusula **CASE** en consultas selectivas.

5. **Modelado de datos**:
   - Creación de un diagrama físico que muestra la estructura de la base de datos.
   - Creación de un **diagrama entidad-relación (ER)** que representa visualmente la estructura de la base de datos.

6. **Contenido del repositorio**:
   - **creacion_tablas.sql**: Script SQL para la creación de las tablas.
   - **datos.sql**: Script SQL para la inserción de datos de muestra.
   - **consultas.sql**: Script SQL con las consultas avanzadas implementadas.
   - **Diagrama Fisico.png**: Imagen de la estructura física de la base de datos.
   - **Diagrama Entidad-Relacion (ER).jpg**: Imagen del diagrama entidad-relación (ER).

### 🤔 ¿Cómo ejecutar? 🤔
1. **Crear la base de datos**: 
   Ejecuta el script `creacion_tablas.sql` en tu sistema de gestión de bases de datos SQL.
2. **Insertar datos de muestra**: 
   Una vez creadas las tablas, ejecuta el script `datos.sql` para poblar la base de datos con datos de ejemplo.
3. **Ejecutar consultas**: 
   Utiliza el script `consultas.sql` para ver ejemplos de consultas avanzadas en la base de datos.

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

### Parte III: App Web 💻

Se desarrolló una **aplicación web** utilizando **React** que permite desplegar la información de un conjunto de usuarios obtenidos desde un **API**. El requerimiento principal es que la información de los usuarios se despliegue de al menos **dos maneras distintas**, con la condición de que una de estas formas sea mediante una **tabla** que permita realizar **filtrado** por nombre, email o ciudad.

#### **Características clave**:
1. **Despliegue de datos en dos formatos diferentes**:
   - **Vista en formato de tabla**: Esta tabla permite filtrar los usuarios de acuerdo con su **ID**, **Nombre**, **Email**, **Compañía** y **Ciudad** a través de una barra de búsqueda.
   - **Vista en formato de tarjetas**: Muestra la información de los usuarios en un formato de **tarjetas** individuales, donde cada tarjeta contiene los detalles del usuario, como el nombre, correo y compañía.

2. **Responsive design**: La aplicación está diseñada para ser completamente **responsive**, lo que asegura que los datos se visualicen adecuadamente en diferentes tamaños de pantalla, tanto en dispositivos móviles como en computadoras de escritorio.

3. **Interacción con el API**: La información de los usuarios se obtiene consumiendo el endpoint proporcionado:
   ```bash
   https://jsonplaceholder.typicode.com/users
   ```
   Se hace una petición **GET** a este API para traer los datos y luego estos se procesan y se despliegan en las vistas mencionadas.

### 👩‍🏫 Tecnologías utilizadas 👩‍🏫
- **React**: Para la creación de la interfaz de usuario y la gestión del estado.
- **JavaScript (ES6+)**: Utilizado en el desarrollo de la lógica del proyecto.
- **CSS**: Para estilizar la aplicación y garantizar un diseño responsivo.
- **API REST**: Consumo del API público (https://jsonplaceholder.typicode.com/users)
- **HTML5**: Estructura básica de la aplicación web.

### 🧐 ¿Cómo ejecutar? 🧐

1. **Instalar dependencias**: Navegar al directorio del proyecto y ejecutar el siguiente comando para instalar las dependencias:
   ```bash
   npm install
   ```
2. **Ejecutar la aplicación**: Una vez instaladas las dependencias, se puede ejecutar el proyecto con el siguiente comando:
   ```bash
   npm start
   ```
3. **Visualizar la aplicación**: La aplicación estará disponible en el navegador en la siguiente dirección:
   ```
   http://localhost:3000
   ```

---
**Nos vemos pronto!ヾ(＾ ∇ ＾).**
