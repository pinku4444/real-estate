import React from 'react';
import './header.scss';
import logo from '../../images/logo.jpeg'
const Header = () => {
    return (
        <div className="Header">
            <div className="logo">
                <img className="logo-img" src={logo} alt='' />
            </div>
        </div>
    );
};

export default Header;