import './App.css';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import ErrorPage from './components/ErrorPage.jsx';

import NavBar from './components/NavBar.jsx';


import { Button } from '@mui/material';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la tienda' />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
           <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={<ErrorPage/>}/> 
        </Routes>
        {/* <ItemListContainer greeting='Bienvenidos a la tienda' />
        <FetchCountry />  */}
    </BrowserRouter>
  );
}

export default App;
