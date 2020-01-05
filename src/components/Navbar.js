import React from "react";
import "./Navbar.css";
import ThemeButton from "./ThemeButton";

const Navbar = props => {
  return (
    <nav className="Navbar">
      <div id="logo" className="fg fg1">Enties</div>
      <div id="nav-menu">
        <ThemeButton className="nav-menu"/>
        <div className="nav-menu">
          <h3>Pricing</h3>
        </div>
        <div className="nav-menu">
          <h3>Login</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
