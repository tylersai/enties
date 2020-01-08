import React from "react";

import "./MovieList.css";
import MovieCardSmall from "./MovieCardSmall";

const MovieList = ({ icon, title, list }) => {
  return (
    <div className="MovieList list discover-list">
      <div className="list-header bg bg3">
        <img src={icon} alt="D" />
        <h2>{title}</h2>
      </div>
      <div className="list-body bg bg2 fg fg3">
        {
            list.map(m => <MovieCardSmall key={m.id} m={m} />)
        }
      </div>
    </div>
  );
};

export default MovieList;
