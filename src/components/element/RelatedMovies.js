import React from "react";
import "./RelatedMovies.css";

import MovieCardSmall from "./MovieCardSmall";
import Loading from "../ui/Loading";

const RelatedMovies = ({ loadRelated, relatedMovies }) => {
  return (
    <div className="RelatedMovies">
      {loadRelated ? (
        <Loading />
      ) : (
        relatedMovies.map(movie => <MovieCardSmall key={movie.id} m={movie} />)
      )}
    </div>
  );
};

export default RelatedMovies;
