import { useState } from 'react';
import freeroomsLogo from '../assets/freeroomsLogo.png';
import freeroomsLogoClosed from '../assets/freeroomsDoorClosed.png';
import searchIcon from '../assets/searchIcon.svg';
import mapIcon from '../assets/mapIcon.svg';
import gridViewIcon from '../assets/gridViewIcon.svg';
import darkModeIcon from '../assets/darkModeIcon.svg';

import './Navbar.css';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<header className="navbar">
			<div className="logo-group">
				<img
					src={isOpen ? freeroomsLogo : freeroomsLogoClosed}
					onClick={() => setIsOpen(!isOpen)}
					className="freerooms-logo"
				/>
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
	);
}