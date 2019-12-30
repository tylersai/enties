import React from "react";
import "./ResultSection.css";
import movie from "../assets/movie-dark.svg";

import { POSTER_PATH } from "../utils/Constant";

const ResultSection = ({ movieList }) => {
  return (
    <section className="ResultSection bg bg1" id="result">
      {movieList.length !== 0 ? (
        <div className="res-wrapper">
          {movieList.map(m => (
            <div key={m.id} className="movie-card bg bg2">

              <div className="movie-header">
                <div className="movie-poster">
                  <img src={ POSTER_PATH + m.poster_path} alt="POSTER" />
                </div>
                <div className="movie-title">
                  <h4>{m.title}</h4>
                </div>
              </div>

              <div className="movie-desc">
                <span>Description</span><br/>{m.overview}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default ResultSection;
