import React from "react";
import "./MovieCardList.css";

import MovieCard from "./MovieCard";

const MovieCardList = ({ movieList }) => {
  if (movieList.length === 0)
    return <div className="not-found">NOT FOUND</div>;

  return (
    <div className="res-wrapper">
      {movieList.map(m => (
        <MovieCard key={m.id} m={m} />
      ))}
    </div>
  );
};

export default MovieCardList;
