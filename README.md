# mitienda-app
**Sistema de Venta de Indumentaria**

---

## 🛍️ Descripción del Sitio

**mitienda-app** es una aplicación web desarrollada con **React + Vite** que simula una tienda de indumentaria moderna. Permite a los usuarios:

- Explorar productos por categoría (vestidos, remeras, calzas, etc.).
- Ver el detalle de cada artículo.
- Seleccionar talles y colores disponibles.
- Agregar productos al carrito.
- Simular una experiencia de compra ágil y responsiva.

El enfoque está puesto en una **UI limpia, responsiva y centrada en el usuario**, utilizando Material UI y React Icons para una presentación estética y funcional.

---
## 🧭 Navegabilidad

La aplicación está organizada como una SPA con React Router:

- **🏠 Home (`/`)**: muestra el listado completo de todos los productos.
- **🛍️ Productos (`/`)**: se accede a un submenú de categorías.
- **📂 Productos por Categoría (`/categoria/:idCategoria`)**: muestra solo los productos de esa categoría. 
- **🔎 Detalle (`/item/:id`)**: vista detallada del producto, con opciones de color, talle y botón de compra.
---
## ⚙️ Tecnologías Utilizadas |

- **React** (librería principal para el desarrollo de interfaces)
- **React DOM** (renderizado de componentes React en el DOM)
- **Vite** (entorno de desarrollo rápido y moderno)
- **Material UI (MUI)** (componentes estilizados listos para producción)
- **MUI Lab** (componentes experimentales de Material UI)
- **Emotion** (`@emotion/react` y `@emotion/styled`) (estilos CSS-in-JS integrados con MUI)
- **React Router DOM** (navegación SPA)
- **React Icons** (íconos vectoriales)
- **React Slick** y **Slick Carousel** (slider/carrusel responsivo)
- **Firebase** (autenticación, base de datos y servicios backend)
- **@fontsource/roboto** (tipografía Roboto optimizada localmente)
- **JavaScript / JSX**
- **CSS3**


## 🚀 Instalación y Uso

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/mitienda-app.git
cd mitienda-app

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev