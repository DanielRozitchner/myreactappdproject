import ItemCount from './components/ItemCount.js/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import './styles/styles.css'  

function App() {
  const inicial = 1
  const max = 10

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Nuestras Tortas'/>
      <ItemCount inicial={inicial} max={max} />
    </div>
  );
}

export default App;
