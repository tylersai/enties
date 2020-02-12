import React from "react";
import "./ThemeButton.css";
import { ThemeContext } from "../../utils/Theme";

const ThemeButton = props => {

  return (
    <ThemeContext.Consumer>
      {({theme, changeTheme}) => (
        <div className="ThemeButton animate-enlarge">
          <label className="switch switch_type2" role="switch" aria-checked>
            <input
              onChange={changeTheme}
              type="checkbox"
              className="switch__toggle"
              checked={theme !== "dark"}
            />
            <span className="switch__label" />
          </label>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeButton;
