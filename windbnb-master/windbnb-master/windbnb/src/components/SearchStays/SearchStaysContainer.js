import React, {useState} from 'react';
import './SearchStays.css';
const SearchStaysContainer = props => {
    const { stays, expandDropdown, isExpanded } = props
    
    
    return (
        <div className={`${isExpanded ? "search-stay-expanded" : "search-stay"}`}>
            <span className="search-stay-location" onClick={() => expandDropdown("location")}>Helsinki, Findland</span>
            <span className="search-stay-guest" nClick={() => expandDropdown("guest")}>Add guest</span>
            <span><i className="material-icons search-icon">search</i></span> 
        </div>
    );
};

export default SearchStaysContainer;