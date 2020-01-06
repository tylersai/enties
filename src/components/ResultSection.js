import React, { useEffect } from "react";
import "./ResultSection.css";
import cross from "../assets/cross.svg";

import Loading from "./Loading";
import MovieCard from "./MovieCard";

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
          <button
            onClick={clearSearchQuery}
            className="fg fg2 bg bg2 clear-search"
          >
            <img src={cross} alt="x" />
          </button>
        </div>
      ) : null}
      {isLoading ? (
        <Loading />
      ) : movieList.length !== 0 ? (
        <div className="res-wrapper">
          {movieList.map(m => (
            <MovieCard key={m.id} m={m}/>
          ))}
        </div>
      ) : (
        <div className="fg fgg not-found">NOT FOUND</div>
      )}
    </section>
  );
};

export default ResultSection;
