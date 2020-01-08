import React from "react";

const MovieList = ({ icon, title, list }) => {
  return (
    <div className="MovieList list discover-list">
      <div className="list-header bg bg3">
        <img src={icon} alt="D" />
        <h2>{title}</h2>
      </div>
      <div className="list-body bg bg2 fg fg3">{title} List Goes Here</div>
    </div>
  );
};

export default MovieList;
