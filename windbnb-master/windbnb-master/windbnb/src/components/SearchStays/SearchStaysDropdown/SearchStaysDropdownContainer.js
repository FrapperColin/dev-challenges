import React, {useState} from 'react';
import SearchStaysContainer from '../SearchStaysContainer';
import './SearchStaysDropdown.css';

const SearchStaysDropdownContainer = props => {
    const {stays, choosenDropdown} = props;

    const [locationHistory, setLocationHistory] = useState([])
    const [expandedDropdown, setExpandedDropdown] = useState(choosenDropdown)
    
    return (
        <div className="search-stays-dropdown">
            <SearchStaysContainer expandDropdown={setExpandedDropdown} isExpanded={true}/>
        </div>
    );
};

export default SearchStaysDropdownContainer;