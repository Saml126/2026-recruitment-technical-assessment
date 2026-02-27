import freeroomsLogo from './assets/freeroomsLogo.png';
import searchIcon from './assets/searchIcon.svg';
import mapIcon from './assets/mapIcon.svg';
import gridViewIcon from './assets/gridViewIcon.svg';
import darkModeIcon from './assets/darkModeIcon.svg';
import filterAltIcon from './assets/filterAltIcon.svg';
import filterListIcon from './assets/filterListIcon.svg';

import buildingData from './data.json';
import BuildingCard from './components/BuildingCard';

import './App.css'

function App() {
  return (
    <div className="main-container">
      <header className="navbar">
        <div className="logo-group">
          <img src={freeroomsLogo} className="freerooms-logo" />
          <h1 className="nav-title">Freerooms</h1>
        </div>
        <div className="nav-actions">
          <button className="nav-btn">
            <img src={searchIcon} className="icon" />
          </button>
          <button className="nav-btn active">
            <img src={gridViewIcon} className="icon" />
          </button>
          <button className="nav-btn">
            <img src={mapIcon} className="icon" />
          </button>
          <button className="nav-btn">
            <img src={darkModeIcon} className="icon" />
          </button>
        </div>
      </header>

      <div className="controlbar">
        <button className="action-btn">
          <img src={filterAltIcon} className="icon controlbar-icon" />
          <span>Filters</span>
        </button>

        <div className="search-box">
          <img src={searchIcon} className="search-icon-inside" />
          <input type="text" placeholder="Search for a building..." />
        </div>

        <button className="action-btn">
          <img src={filterListIcon} className="icon controlbar-icon" />
          <span>Sort</span>
        </button>
      </div>

      <div className="buildings-grid">
        {buildingData.map((building) => (
          <BuildingCard
            key={building.name}
            building={building}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
