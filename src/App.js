import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import CartContextProvider from './context/CartContext';


function App() {
  

  return (
<CartContextProvider>
  <BrowserRouter>
    <div className="app">
      <NavBar />
      <Routes>
          <Route path="*"
          element= { <Navigate to="/" /> }
          />
          <Route
              exact
              path="/"
              element= { <ItemListContainer greeting='Nuestras Tortas'/> }
           />
           <Route
              exact
              path="/category/:idCate"
              element= { <ItemListContainer greeting='Nuestras Tortas'/> }
              />
            <Route
              exact
              path="/detail/:id"
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
  </CartContextProvider> 

    
  );
}

export default App;
