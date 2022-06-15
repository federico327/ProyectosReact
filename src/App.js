import './App.css'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Navbar from './components/navegacion/navbar'
import Inicio from './components/paginas/inicio'
import Tienda from './components/paginas/tienda'
import Nosotros from './components/paginas/nosotros'
import ItemListContainer from './components/paginas/ItemListContainer'
import ItemCount from './components/paginas/ItemCount'

function App() {
  return (

        <Router>
          <Navbar/>
          
          <Routes>
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/nosotros' element= {<Nosotros />}/>
            <Route path='/tienda' element= {<Tienda />}/>
            <Route path='/ItemCount' element= {<ItemCount />}/>
            <Route path='/ItemListContainer' element={<ItemListContainer />}/>
          </Routes>
        </Router>

  );
}

export default App;
