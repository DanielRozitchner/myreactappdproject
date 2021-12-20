import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import './styles/styles.css'  

function App() {
  

  return (
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
          <Route
              exact
              path="/"
              element= { <ItemListContainer greeting='Nuestras Tortas'/> }
           />
           <Route
              exact
              path="/categoria/:idCate"
              element= { <ItemListContainer greeting='Nuestras Tortas'/> }
              />
            <Route
              exact
              path="/detalle/:id"
              element= { <ItemDetailContainer /> }
              />
             <Route
              exact
              path="/cart"
              element= { <Cart /> }
              />
            
      </Routes>
    </div>

    </BrowserRouter>
    
  );
}

export default App;
