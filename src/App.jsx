import './App.css';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';

import NavBar from './components/NavBar/NavBar.jsx';


import { Button } from '@mui/material';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import { ToastProvider } from './context/ToastContext.jsx';
import CartContainer from './components/Cart/CartContainer.jsx';
import ErrorPage from './components/shared/ErrorPage.jsx';
import Checkout from './components/Checkout.jsx';


function App() {

  return (

      <BrowserRouter>
        
        <ToastProvider>

          <CartProvider>
              <NavBar />

              <Routes>
                <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la tienda' />} />
                <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartContainer/>} />
                <Route path='/checkout' element={<Checkout/>} />
                <Route path='*' element={<ErrorPage/>}/> 
              </Routes>
          </CartProvider>
        </ToastProvider>


        {/* <ItemListContainer greeting='Bienvenidos a la tienda' />
        <FetchCountry />  */}
    </BrowserRouter>

  );
}

export default App;
