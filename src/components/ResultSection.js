import React, { useEffect } from "react";
import "./ResultSection.css";
import movie from "../assets/movie-dark.svg";

import { POSTER_PATH } from "../utils/Constant";
import Loading from "./Loading";

const ResultSection = ({ isLoading, movieList }) => {

  useEffect(() => {
    const h = document.documentElement.clientHeight;
    const searchHeight = document.getElementById("search").clientHeight;

    document.getElementById("result").style.minHeight = (h - searchHeight) + "px";
  });

  return (
    <section className="ResultSection bg bg1" id="result">
      {isLoading ? (
        <Loading />
      ) : movieList.length !== 0 ? (
        <div className="res-wrapper">
          {movieList.map(m => (
            <div key={m.id} className="movie-card bg bg2">
              <div className="movie-header">
                <div className="movie-poster">
                  <img src={POSTER_PATH + m.poster_path} alt="POSTER" />
                </div>
                <div className="movie-title">
                  <h4>{m.title}</h4>
                </div>
              </div>

              <div className="movie-desc">
                <p>
                  <span>Description</span>
                  <br />
                  {m.overview}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default ResultSection;
