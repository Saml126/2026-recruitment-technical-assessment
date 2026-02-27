import './BuildingCard.css';

export interface Building {
  name: string;
  rooms_available: number;
  building_picture?: string; 
  building_file?: string;   
}

interface BuildingCardProps {
	building: Building;
}

function BuildingCard({ building }: BuildingCardProps) {
	const imageName = building.building_picture || building.building_file;
	const cleanImageName = imageName ? imageName.replace('./', '') : '';

	return (
		<div className="building-card">
			<img
				src={`src/assets/${cleanImageName}`}
				alt={building.name}
				className="building-image"
			/>

			<div className="status-pill">
				<span className="status-dot" />
				{building.rooms_available} rooms available
			</div>

			<div className="building-name">
				{building.name}
			</div>
		</div>
	);
}

export default BuildingCard;