import './App.css'
import { BrowserRouter as Rutas, Routes, Route } from 'react-router-dom'

import Navbar from './components/navegacion/navbar'
import Inicio from './components/paginas/inicio'
import Tienda from './components/paginas/tienda'
import Nosotros from './components/paginas/nosotros'

import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailConatainer from './components/ItemDetail/ItemDetailContainer'
import CartContextProvider from './components/Cart/CartContext'
import Cart from "./components/Cart/Cart"
import ItemListContainer from './conteiners/ItemListContainer'


function App() {
  return (
    <Rutas>
      <CartContextProvider> 
        <Navbar/>
          
        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/nosotros' element= {<Nosotros />}/>
          <Route path='/tienda' element= {<Tienda />}/>
          <Route path='/ItemCount' element= {<ItemCount stock = {15} initial = {1}/>}/>
          <Route path='/ItemListContainer' element={<ItemListContainer />}/>
          <Route path="/camperones/:id" element={<ItemDetailConatainer />} />   
          <Route path="/Cart" element={<Cart />} />   

                          

        </Routes>
      </CartContextProvider>
    </Rutas>
  );
}

export default App;