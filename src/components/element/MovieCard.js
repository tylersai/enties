import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";
import movieDark from "../../assets/movie-dark.svg";
import movieLight from "../../assets/movie-light.svg";

import { POSTER_PATH } from "../../utils/Constant";
import { ThemeContext } from "../../utils/Theme";
import Rating from "../ui/Rating";
import PriceTag from "../ui/PriceTag";

const MovieCard = ({ m }) => {
  const options = { year: "numeric", month: "short", day: "numeric" };

  const context = useContext(ThemeContext);
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/movie/${m.id}`);
  };

  return (
    <div onClick={goDetail} className="movie-card bg bg2 ent-shadow animate-enlarge">
      <div className="movie-header">
        <div className="movie-poster fg fgg">
          {m.poster_path ? (
            <img src={POSTER_PATH + m.poster_path} alt="POSTER" />
          ) : (
            <img className="animate-fadein" src={context.theme === "dark" ? movieDark : movieLight} alt="POSTER" />
          )}
        </div>
        <div className="movie-title">
          <h4 className="fg fg1">{m.title}</h4>

          {m.release_date ? (
            <div className="fg fg3 release-date">{new Date(m.release_date).toLocaleDateString("en-US", options)}</div>
          ) : null}

          <PriceTag popularity={m.popularity} />
          <div className="movie-rating">
            {m.vote_average && m.vote_count ? <Rating voteAverage={m.vote_average} voteCount={m.vote_count} /> : null}
          </div>
        </div>
      </div>

      {m.overview ? (
        <div className="movie-desc">
          <p className="fg fg2">
            <span>Description</span>
            <br />
            {m.overview}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default MovieCard;
