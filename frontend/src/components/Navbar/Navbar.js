import React from 'react';
import logo from './logo.svg';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbarContainer">
        <div className="logoContainer">
            <img src={logo} alt="cuvetteLogo" />
        </div>
        <div className="buttonContainer">
            <button>Login/Signup</button>
        </div>
    </div>
  );
};

export default Navbar;