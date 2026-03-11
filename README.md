# CRM React

Aplicación de gestión de clientes (CRM) construida con React 19, React Router DOM v7 y Tailwind CSS v4. Permite crear, listar, editar y eliminar clientes a través de una interfaz limpia y responsiva.

## Funcionalidades

- Listar todos los clientes registrados
- Agregar nuevos clientes con validación de formulario
- Editar datos de un cliente existente
- Eliminar clientes con confirmación
- Validación de campos obligatorios y formato de email

## Stack tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| React | 19 | UI Library |
| React Router DOM | 7 | Routing + Data Loaders/Actions |
| Tailwind CSS | 4 | Estilos utilitarios |
| Vite | 7 | Build tool y dev server |
| JSON Server | - | API REST mock para desarrollo |

## Estructura del proyecto

```
crm-react/
├── src/
│   ├── components/
│   │   ├── Cliente.jsx      # Fila de cliente en tabla (con acción de borrado)
│   │   ├── Error.jsx        # Componente de mensaje de error
│   │   ├── ErrorPage.jsx    # Página de error de React Router
│   │   ├── Formulario.jsx   # Formulario reutilizable de cliente
│   │   └── Layout.jsx       # Layout principal con sidebar
│   ├── data/
│   │   └── clientes.js      # Funciones de acceso a la API (CRUD)
│   ├── pages/
│   │   ├── Index.jsx        # Listado de clientes
│   │   ├── NuevoCliente.jsx # Formulario de nuevo cliente
│   │   └── EditarCliente.jsx# Formulario de edición
│   ├── index.css
│   └── main.jsx             # Configuración de rutas
├── db.json                  # Base de datos mock para JSON Server
└── index.html
```

## Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd crm-react

# Instalar dependencias
npm install
```

## Uso en desarrollo

Se necesitan dos terminales: una para la API mock y otra para el servidor de desarrollo.

**Terminal 1 — API mock (JSON Server):**
```bash
npx json-server db.json --port 3000
```

**Terminal 2 — Servidor de desarrollo:**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.
La API estará disponible en `http://localhost:3000/clientes`.

## Scripts disponibles

```bash
npm run dev      # Inicia servidor de desarrollo con HMR
npm run build    # Genera build de producción en /dist
npm run preview  # Previsualiza el build de producción
npm run lint     # Ejecuta ESLint
```

## Variables de entorno

El archivo `.env` contiene la URL de la API:

```env
VITE_API_URL=http://localhost:3000/clientes
```

## Arquitectura de datos

La app usa el patrón de **Data Router** de React Router v7:

- **Loaders**: cargan datos antes de renderizar la página (ej. lista de clientes, cliente por ID)
- **Actions**: manejan envíos de formulario (crear, editar, eliminar)
- Sin estado global: todo el flujo de datos pasa por loaders y actions

## Build de producción

```bash
npm run build
npm run preview
```

El build de producción genera ~290 kB de JS (~92 kB gzip) y ~10 kB de CSS.
