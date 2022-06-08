import './App.css'
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import Navbar from './/components/navegacion/navbar'
import Inicio from './/components/paginas/inicio'
import Tienda from './/components/paginas/tienda'
import Nosotros from './/components/paginas/nosotros'
import Itemlistcontainer from './components/itemlistcontainer/itemlistcontainer'
import ItemCount from './/components/ItemCount.js/ItemCount'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/inicio' element={<Inicio/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/tienda' element={<Tienda/>}/>
          <Route path='/itemlistcontainer' element={<Itemlistcontainer/>}/>
          <Route path='/ItemCount' element={<ItemCount/>}/>
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
