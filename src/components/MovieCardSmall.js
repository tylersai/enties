import React from "react";

import "./MovieCardSmall.css";

import { POSTER_PATH } from "../utils/Constant";

const MovieCardSmall = ({ m }) => {
  return (
    <div className="MovieCardSmall">
      <img src={POSTER_PATH + m.poster_path} alt="POSTER"/>
      <div>
          <h5 className="fg fg3">{m.title}</h5>
      </div>
    </div>
  );
};

export default MovieCardSmall;
