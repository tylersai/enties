import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
import ThemeButton from "../ui/ThemeButton";

const Navbar = props => {

  const history = useHistory();

  const routeTo = () => history.push("/");

  return (
    <nav className="Navbar">
      <div onClick={routeTo} id="logo" className="logo fg fg1 animate-enlarge">Enties</div>
      <div className="nav-menu-group">
        <ThemeButton className="nav-menu"/>
        <div className="nav-menu animate-enlarge">
          <h3>Pricing</h3>
        </div>
        <div className="nav-menu animate-enlarge">
          <h3>Login</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
