import React, { useEffect } from "react";
import "./ResultSection.css";
import movie from "../assets/movie-dark.svg";
import cross from "../assets/cross.svg";

import { POSTER_PATH } from "../utils/Constant";
import Loading from "./Loading";
import Rating from "./Rating";

const ResultSection = ({
  isLoading,
  movieList,
  searchQuery,
  clearSearchQuery
}) => {
  useEffect(() => {
    const h = document.documentElement.clientHeight;
    const searchHeight = document.getElementById("search").clientHeight;

    document.getElementById("result").style.minHeight = h - searchHeight + "px";
  });

  return (
    <section className="ResultSection bg bg1" id="result">
      {searchQuery ? (
        <div className="search-desc">
          <h4 className="fg fgg">
            {isLoading ? "Searching for : " : "Showing results for : "}
            <span>"{searchQuery}"</span>
          </h4>
          <button onClick={clearSearchQuery} className="fg fg2 bg bg2 clear-search">
            <img src={cross} alt="x"/>
          </button>
        </div>
      ) : null}
      {isLoading ? (
        <Loading />
      ) : movieList.length !== 0 ? (
        <div className="res-wrapper">
          {movieList.map(m => (
            <div key={m.id} className="movie-card bg bg2">
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
                  <div className="fg fg3 year-genre">
                    {m.release_date
                      ? new Date(m.release_date).getFullYear() + " \u2022"
                      : null} Romance
                  </div>
                  <button className="price-tag bg bg2">$19.99</button>
                  <div className="movie-rating">
                    <Rating voteCount={m.vote_count ? m.vote_count : 0} />
                  </div>
                </div>
              </div>

              <div className="movie-desc">
                <p className="fg fg2">
                  <span>Description</span>
                  <br />
                  {m.overview}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : <div className="fg fgg not-found">NOT FOUND</div>}
    </section>
  );
};

export default ResultSection;
