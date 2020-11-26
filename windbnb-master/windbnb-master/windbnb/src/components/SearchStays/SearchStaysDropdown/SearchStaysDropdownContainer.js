import React, {useState} from 'react';
import SearchStaysContainer from '../SearchStaysContainer';
import './SearchStaysDropdown.css';

const SearchStaysDropdownContainer = props => {
    const {stays, choosenDropdown} = props;

    const [locationHistory, setLocationHistory] = useState([])
    const [expandedDropdown, setExpandedDropdown] = useState(choosenDropdown)
    
    return (
        <SearchStaysContainer expandDropdown={setExpandedDropdown} isExpanded={true}/>
    );
};

export default SearchStaysDropdownContainer;