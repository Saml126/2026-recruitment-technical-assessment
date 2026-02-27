import './BuildingCard.css';

function BuildingCard({ building }) {
	const imageName = building.building_picture || building.building_file;
	const cleanImageName = imageName.replace('./', '');

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