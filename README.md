# React + Vite
# React CRUD con API Pública de Usuarios

Este es un proyecto que implementa un CRUD (Crear, Leer, Actualizar, Eliminar) utilizando una **API pública de usuarios**. La aplicación está construida en **React**, usando **Zustand** para el manejo de estado, **Tailwind CSS** para el diseño y **React Router** para la navegación. 

### Características:
- **Login**: Permite a los usuarios autenticarse para acceder a la aplicación.
- **Dashboard**: Una vista principal donde se gestionan los usuarios.
- **Lista de Usuarios**: Muestra una lista de usuarios obtenida desde una API pública.
- **Nuevo Usuario**: Permite agregar nuevos usuarios a través de un formulario.
- **Editar Usuario**: Modal que permite editar la información de un usuario.

### Notas sobre la API:
- **GET**: La API responde correctamente a las solicitudes GET, proporcionando los datos de los usuarios.
- **POST, PUT, DELETE**: Las solicitudes a estas rutas devuelven un código de estado 200, pero no actualizan la data en el backend, ya que la API solo soporta GET.

### Tecnologías utilizadas:
- **React**: Biblioteca principal para construir la UI.
- **Zustand**: Manejo de estado global.
- **Tailwind CSS**: Utilizado para el diseño y estilizado de la aplicación.
- **React Router**: Navegación entre las diferentes vistas de la aplicación.

### Instalación:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Ivansolarte/frontend_domina

2. Instala las dependencias:
   npm install

3. npm run dev