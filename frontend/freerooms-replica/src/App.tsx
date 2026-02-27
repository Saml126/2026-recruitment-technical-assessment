import NavBar from './components/NavBar.tsx';
import SearchBar from './components/SearchBar.tsx';
import BuildingGrid from './components/BuildingsGrid.tsx';

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
