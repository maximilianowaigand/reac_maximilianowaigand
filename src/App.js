//import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
//const [show, setShow] = useState(true)

  return (
    <div className="App">


        <BrowserRouter>
            
        <Navbar/>
         <Routes>
          <Route path='/'element={<ItemListConteiner />}/>
          <Route path='/detail/:productId/' element={<ItemDetailConteiner/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
         </Routes>

    
        </BrowserRouter>

    </div>
  );
}

export default App;
