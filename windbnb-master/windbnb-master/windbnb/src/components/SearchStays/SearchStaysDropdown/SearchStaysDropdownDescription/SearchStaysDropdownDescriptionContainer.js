import React from 'react';
import SearchStaysDropdownGuestContainer from './SearchStaysDropdownGuest/SearchStaysDropdownGuestContainer';
import SearchStaysDropdownHistoryContainer from './SearchStaysDropdownHistory/SearchStaysDropdownHistoryContainer';

const SearchStaysDropdownDescriptionContainer = props => {
    const { choosenDropdown } = props;

    const ChoosenDescriptionComponent = () => {
        if(choosenDropdown === "guest") {
            return <SearchStaysDropdownGuestContainer />
        } else if(choosenDropdown === "location") {
            return <SearchStaysDropdownHistoryContainer />
        } else return null;
    }
    
    return (
        <ChoosenDescriptionComponent />
    );
};
export default SearchStaysDropdownDescriptionContainer;