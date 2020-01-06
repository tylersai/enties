import React from "react";
import "./ThemeButton.css";

const ThemeButton = props => {
  return (
    <div className="ThemeButton">
      <label className="switch switch_type2" role="switch" aria-checked>
        <input type="checkbox" className="switch__toggle" />
        <span className="switch__label" />
      </label>
    </div>
  );
};

export default ThemeButton;
