import React, { useState } from 'react';
import SearchStaysContainer from '../SearchStays/SearchStaysContainer';
import logo from '../../img/logo.png';
import './Header.css';

const HeaderContainer = props => {
    const { stays } = props;
    const [expandHeaderDropdown, setExpandHeaderDropdown] = useState(null);
    console.log(expandHeaderDropdown)
    return (
        <header className={expandHeaderDropdown !== null ? 'expanded' : 'classic' }>
            <img className={expandHeaderDropdown !== null ? 'logo logo-expanded' : 'logo'} src={logo} alt="Logo"/>
            <SearchStaysContainer stays={stays} expandDropdown={setExpandHeaderDropdown} isExpanded={expandHeaderDropdown !== null} />
        </header>
    );
};

export default HeaderContainer;