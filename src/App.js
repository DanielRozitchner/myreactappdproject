import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import './styles/styles.css'  

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Nuestras Tortas'/>
    </div>
  );
}

export default App;
