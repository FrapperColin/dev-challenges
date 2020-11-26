import React, { useState } from 'react';
import SearchStaysContainer from '../SearchStays/SearchStaysContainer';
import SearchStaysDropdownContainer from '../SearchStays/SearchStaysDropdown/SearchStaysDropdownContainer';
import logo from '../../img/logo.png';
import './Header.css';
import {Dropdown}  from 'reactstrap';

const HeaderContainer = props => {
    const { stays } = props;
    const [shouldDisplayDropdown, setShouldDisplayDropdown] = useState(false);
    const [expandHeaderDropdown, setExpandHeaderDropdown] = useState(null);
    console.log(expandHeaderDropdown)
    return (
        <header className={expandHeaderDropdown !== null ? 'expanded' : 'classic' }>
            {expandHeaderDropdown ? 
                <SearchStaysDropdownContainer />
             : 
             <>
                <img className="logo" src={logo} alt="Logo"/>
                <SearchStaysContainer stays={stays} expandDropdown={setExpandHeaderDropdown} isExpanded={false} />
            </>
            }
        </header>
    );
};

export default HeaderContainer;