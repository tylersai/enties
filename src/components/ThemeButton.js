import React from "react";
import "./ThemeButton.css";

const ThemeButton = props => {

  const swapStyle = (b,w) => {
    const rootStyle = getComputedStyle(document.documentElement);

    const black = rootStyle.getPropertyValue(b);
    const white = rootStyle.getPropertyValue(w);

    document.documentElement.style.setProperty(b, white);
    document.documentElement.style.setProperty(w, black);
  }

  const changeTheme = e => {
    swapStyle('--bokehblack', '--bokehwhite');
    
    swapStyle('--entblack', '--entwhite');
    swapStyle('--entdark', '--entlight');
    swapStyle('--entdarkgray', '--entlightgray');

    swapStyle('--blackshadow', '--whiteshadow');
    swapStyle('--black', '--white');
  }

  return (
    <div className="ThemeButton animate-enlarge">
      <label className="switch switch_type2" role="switch" aria-checked>
        <input onChange={changeTheme} type="checkbox" className="switch__toggle" />
        <span className="switch__label" />
      </label>
    </div>
  );
};

export default ThemeButton;
