import React from "react";
import { useHistory } from "react-router-dom";
import "./MovieCardSmall.css";
import movie from "../../assets/movie-dark.svg";

import { POSTER_PATH } from "../../utils/Constant";

const MovieCardSmall = ({ m }) => {

  const history = useHistory();
  const goDetail = () => { history.push(`/movie/${m.id}`) };

  return (
    <div onClick={goDetail} className="MovieCardSmall animate-enlarge">
      <div className="img-section">
      {
        m.poster_path ? (
            <img className="with-poster" src={POSTER_PATH + m.poster_path} alt="POSTER" />
          ) : (
            <img className="no-poster" src={movie} alt="POSTER" />
          )
      }
      </div>
      <div className="caption-section">
        <h5 className="fg fg3">{m.title}</h5>
      </div>
    </div>
  );
};

export default MovieCardSmall;
