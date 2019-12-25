import React from 'react';
import './Navbar.css';

const Navbar = (props) => {

    return (
        <nav className="Navbar">
            <div id="logo">Enties</div>
            <div className="nav-menu"><h3>Pricing</h3></div>
            <div className="nav-menu"><h3>Login</h3></div>
        </nav>
    );

};

export default Navbar;