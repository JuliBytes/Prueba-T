
---

# Prueba Desarrollador 👩‍💻

---

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

**Nos vemos pronto!ヾ(＾ ∇ ＾).**

---

