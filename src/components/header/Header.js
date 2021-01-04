import React from 'react';
import logo from './../../logo.svg';

const Header = () => {
  return (
    <>
      <div className="header-nav-wrapper">
        <div className="haeder-nav"></div>
        <div className="haeder-navbar">
            <div className="header-image">
                <img src={logo} />
            </div>
            <div className="header-menu-toggle">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="header-nav">
                <li className="header-nav-item">Now Playing</li>
                <li className="header-nav-item">Now Movies</li>
            </ul>
            <input 
            className="search-input"
            type="text"
            placeholder="Search for a movie"
             />
        </div>
      </div>
    </>
  );
};

export default Header;
