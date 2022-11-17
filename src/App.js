//import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartProvider} from './context/CartContext';
import { NotificationProvider } from './components/notification/ServiceNotification';
import Cart from './components/Cart/Cart'
import Checkout from './components/checkout/checkout'


function App() {

  return (
    <div className="App">
      
      <NotificationProvider>
      <CartProvider>
        <BrowserRouter>
        <Navbar/>
         <Routes>
          <Route path='/'element={<ItemListConteiner />}/>
          <Route path='/category/:categoryId/'element={<ItemListConteiner/>}/>
          <Route path='/contact' element={<h1>CONTACT</h1>} />
          <Route path='/cart' element={<Cart />}/>
          <Route path= '/checkout' element={<Checkout />}/>
          <Route path='/detail/:productId/' element={<ItemDetailConteiner/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
         </Routes>
        </BrowserRouter>
      </CartProvider>
      </NotificationProvider>

    </div>
  );
}

export default App;
