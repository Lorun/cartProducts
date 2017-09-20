import React from 'react';

import './header.css';
import logo from './logo.svg';
import slogan from './a-better-experience@2x.png';

export const Header = (props) => (
    <header className="header">
        <img src={logo} alt="Aduax" className="header-logo"/>
        <img src={slogan} alt="a better experience" className="header-slogan"/>
    </header>
);

export default Header;