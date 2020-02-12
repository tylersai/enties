import React from "react";

export const ThemeContext = React.createContext({
  theme: "dark",
  changeTheme: () => {}
});

export const swapStyle = (b, w) => {
  const rootStyle = getComputedStyle(document.documentElement);

  const black = rootStyle.getPropertyValue(b);
  const white = rootStyle.getPropertyValue(w);

  document.documentElement.style.setProperty(b, white);
  document.documentElement.style.setProperty(w, black);
};

export const toggleTheme = e => {
  swapStyle("--bokehblack", "--bokehwhite");

  swapStyle("--entblack", "--entwhite");
  swapStyle("--entdark", "--entlight");
  swapStyle("--entdarkgray", "--entlightgray");

  swapStyle("--blackshadow", "--whiteshadow");
  swapStyle("--black", "--white");
};
