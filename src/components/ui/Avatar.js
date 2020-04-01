import React from "react";
import "./Avatar.css";

const Avatar = ({ name, imgLink }) => {
  if (name || imgLink) {
    const nameArr = name.split(' ');
    let avaterText = "";
    if (nameArr.length > 1) {
      avaterText = nameArr[0][0] + nameArr[nameArr.length - 1][0];
    } else {
      avaterText = nameArr[0].slice(0, 2);
    }
    return (
      <div className="Avatar">
        <p className="Avatar-text">{avaterText}</p>
      </div>
    );
  } else return null;
};

export default Avatar;