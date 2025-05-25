//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // Importa la función createRoot de react-dom/client para renderizar la aplicación
//import './index.css'
import App from './App.jsx' // Importa el componente principal de la aplicación

//Roboto

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  // <React.StrictMode> hace que se renderice dos veces el componente para detectar errores
  // y advertencias en el código, pero esto puede causar problemas con algunos componentes
  // de terceros que no están preparados para esto. Por lo tanto, se recomienda usarlo
  /*<StrictMode>
    <App />
  </StrictMode>,*/
  <App /> // Renderiza el componente App en el elemento con id 'root' del HTML
)
