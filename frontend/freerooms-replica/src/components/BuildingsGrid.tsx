import buildingData from '../data.json';
import BuildingCard from './BuildingCard';
import './BuildingsGrid.css';

export default function BuildingGrid() {
  return (
    <div className="buildings-grid">
      {buildingData.map((building) => (
        <BuildingCard
          key={building.name}
          building={building}
        />
      ))}
    </div>
  );
}