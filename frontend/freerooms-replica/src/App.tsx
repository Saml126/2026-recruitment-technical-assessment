import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import BuildingGrid from './components/BuildingsGrid';

import './App.css'

function App() {

  return (
    <div className="main-container">
      <NavBar />
      <SearchBar />
      <BuildingGrid />
    </div>
  );
}

export default App;
