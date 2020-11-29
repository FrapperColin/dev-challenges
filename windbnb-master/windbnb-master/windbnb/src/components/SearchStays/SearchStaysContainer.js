import React, {useState} from 'react';
import './SearchStays.css';
import SearchStaysDropdownDescriptionContainer from './SearchStaysDropdown/SearchStaysDropdownDescription/SearchStaysDropdownDescriptionContainer';

const SearchStaysContainer = props => {
    const { stays, expandDropdown, isExpanded } = props;
    const [choosenDropdown, setChoosenDropdown] = useState(null)
    const [location, setLocation] = useState(null)


    console.log(location)
    const handleClickInput = (inputType) => {
        if (!isExpanded) {
            expandDropdown(inputType);
            setChoosenDropdown(inputType);
        } else {
            setChoosenDropdown(inputType);
        }
    }

    return (
        <>
            <div className={`${isExpanded ? "search-stay-expanded" : "search-stay"}`}>
                <span className={`search-stay-location${choosenDropdown === "location" ? "-selected" : ""}`} onClick={() => handleClickInput("location")}>
                    <p className="search-stay-location-title">LOCATION</p>
                    <input className="input-location" placeholder="hello" value={location} onChange={e => setLocation(e.target.value)} />
                </span>
                <span className={`search-stay-guest${choosenDropdown === "guest" ? "-selected" : ""}`} onClick={() => handleClickInput("guest")}>
                    Add guest
                </span>
                <span>
                    <button className={`search-button${isExpanded ? "-expanded" : ""}`}>
                        <i className="material-icons search-icon">search</i>{isExpanded ? "Search" : ""}
                    </button>
                </span>
            </div>
            {isExpanded ?
                <div className="dropdown-description">
                   <SearchStaysDropdownDescriptionContainer choosenDropdown={choosenDropdown}/> 
                </div>
            : null}
           
        </>
    );
};

export default SearchStaysContainer;