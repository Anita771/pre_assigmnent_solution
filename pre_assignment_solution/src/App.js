import './App.css';
import Homepage from './Components/Homepage';
import Searchbar from './Components/Searchbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Homepage/>
        <Searchbar/>
      </header>
    </div>
  );
}

export default App;
