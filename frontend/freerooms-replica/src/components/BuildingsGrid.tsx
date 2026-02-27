import buildingData from '../data.json';
import BuildingCard from './BuildingCard.tsx';
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