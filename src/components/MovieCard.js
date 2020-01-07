import React from "react";
import "./MovieCard.css";
import movie from "../assets/movie-dark.svg";

import { POSTER_PATH } from "../utils/Constant";
import Rating from "./Rating";

const MovieCard = ({ m }) => {
  const options = { year: "numeric", month: "short", day: "numeric" };

  return (
    <div className="movie-card bg bg2 ent-shadow">
      <div className="movie-header">
        <div className="movie-poster">
          {m.poster_path ? (
            <img src={POSTER_PATH + m.poster_path} alt="POSTER" />
          ) : (
            <img src={movie} alt="POSTER" />
          )}
        </div>
        <div className="movie-title">
          <h4 className="fg fg1">{m.title}</h4>

          {m.release_date ? (
            <div className="fg fg3 release-date">
              {new Date(m.release_date).toLocaleDateString("en-US", options)}
            </div>
          ) : null}

          <button className="price-tag bg bg2">$19.99</button>
          <div className="movie-rating">
            {m.vote_average && m.vote_count ? (
              <Rating voteAverage={m.vote_average} voteCount={m.vote_count} />
            ) : null}
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