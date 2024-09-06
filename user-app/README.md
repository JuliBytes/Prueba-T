
---

# Prueba Desarrollador 👩‍💻

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

---
