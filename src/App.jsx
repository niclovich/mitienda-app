import './App.css';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import ErrorPage from './components/ErrorPage.jsx';

import NavBar from './components/NavBar.jsx';


import { Button } from '@mui/material';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';


function App() {

  return (

      <BrowserRouter>
        
        <NavBar />
        <CartProvider>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la tienda' />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='*' element={<ErrorPage/>}/> 
          </Routes>
        </CartProvider>

        {/* <ItemListContainer greeting='Bienvenidos a la tienda' />
        <FetchCountry />  */}
    </BrowserRouter>

  );
}

export default App;
