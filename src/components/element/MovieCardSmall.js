import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCardSmall.css";
import movieDark from "../../assets/movie-dark.svg";
import movieLight from "../../assets/movie-light.svg";

import { POSTER_PATH } from "../../utils/Constant";
import { ThemeContext } from "../../utils/Theme";

const MovieCardSmall = ({ m }) => {
  const context = useContext(ThemeContext);
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/movie/${m.id}`);
  };

  return (
    <div onClick={goDetail} className="MovieCardSmall animate-enlarge">
      <div className="img-section fg fgg">
        {m.poster_path ? (
          <img className="with-poster" src={POSTER_PATH + m.poster_path} alt="POSTER" />
        ) : (
          <img
            className="animate-fadein no-poster"
            src={context.theme === "dark" ? movieDark : movieLight}
            alt="POSTER"
          />
        )}
      </div>
      <div className="caption-section">
        <h5 className="fg fg3">{m.title}</h5>
      </div>
    </div>
  );
};

export default MovieCardSmall;
