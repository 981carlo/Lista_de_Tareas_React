# Lista de tareas

Aplicación de lista de tareas desarrollada con **React** y **Vite**.
Permite añadir tareas, marcarlas como completadas, filtrarlas por estado, eliminarlas y mantenerlas guardadas en el navegador mediante `localStorage`.

## Funcionalidades

* Añadir nuevas tareas
* Marcar tareas como completadas o pendientes
* Filtrar tareas por estado:
  * Todas
  * Pendientes
  * Completadas
* Eliminar tareas individuales
* Persistencia de datos con `localStorage`
* Test básico con **Vitest** y **Testing Library**

## Tecnologías utilizadas

* React
* Vite
* JavaScript
* CSS Modules
* Vitest
* Testing Library

## Estructura del proyecto

```text
src/
  components/
    FilterButtons.jsx
    Header.jsx
    TaskForm.jsx
    TaskItem.jsx
    TaskList.jsx
  context/
    TasksContext.jsx
  hooks/
    useLocalStorage.js
    useTasks.js
    useTasks.test.js
    useTasksContext.js
  styles/
    App.module.css
    FilterButtons.module.css
    TaskForm.module.css
    TaskItem.module.css
  App.jsx
  main.jsx
  setupTests.js
```

## Instalación

Clona el repositorio e instala las dependencias:

```bash
npm install
```

## Ejecución en desarrollo

```bash
npm run dev
```

## Scripts disponibles

```bash
npm run dev
npm run build
npm run preview
npm run test
npm run test:run
```

## Organización de la aplicación

La lógica principal de las tareas está centralizada en un hook personalizado (`useTasks`) y compartida mediante un contexto (`TasksContext`).

Esto permite:

* separar la lógica de negocio de los componentes
* reutilizar el estado y las funciones en distintos componentes
* mantener una estructura más limpia y escalable

## Persistencia de datos

Las tareas se guardan en el navegador usando `localStorage`, por lo que no se pierden al recargar la página.

## Testing

El proyecto incluye configuración básica de testing con:

* Vitest
* Testing Library
* jsdom
* jest-dom

Para ejecutar los tests:

```bash
npm run test
```

O para ejecutarlos una sola vez:

```bash
npm run test:run
```

## Autor

Proyecto realizado por **Carlo** García González.
