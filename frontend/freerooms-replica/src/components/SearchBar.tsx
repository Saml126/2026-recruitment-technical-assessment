import filterAltIcon from '../assets/filterAltIcon.svg';
import filterListIcon from '../assets/filterListIcon.svg';
import searchIcon from '../assets/searchIcon.svg';
import './SearchBar.css';

export default function SearchBar() {
	return (
		<div className="search-bar">
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
	)
}