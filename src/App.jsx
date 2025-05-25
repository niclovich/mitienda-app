//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import './App.css'
import ItemListContainer from './components/ItemListContainer.jsx'
import NavBar from './components/NavBar.jsx'
import NavbarCarrusel from './components/NavbarCarrusel.jsx'

 //componentes
import ButtonMultiUsu from './examples/ButtonMultiUsu.jsx'
import Contador from './examples/Contador.jsx'

import { Button } from '@mui/material'
function App() {

  return (
    <>
      {/* <ButtonMultiUsu texto='Hacer Click' estilos ={styles}  funcion  ={saludar}/> */}
       {/* <Contador /> */}
        {/* <NavBar></NavBar> */}
        <NavBar />
       <ItemListContainer greeting='Bienvenidos a la tienda' />

    </>
  )
}

export default App
