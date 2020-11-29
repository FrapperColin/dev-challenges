import React, {useState} from 'react';
import SearchStaysContainer from '../SearchStaysContainer';
import './SearchStaysDropdown.css';
import SearchStaysDropdownDescriptionContainer from './SearchStaysDropdownDescription/SearchStaysDropdownDescriptionContainer';

const SearchStaysDropdownContainer = props => {
    const {stays, choosenDropdown} = props;
    const [expandedDropdown, setExpandedDropdown] = useState(choosenDropdown)
    
    return (
        <div className="search-stays-dropdown">
            <SearchStaysDropdownDescriptionContainer choosenDropdown={choosenDropdown} />
        </div>
    );
};

export default SearchStaysDropdownContainer;