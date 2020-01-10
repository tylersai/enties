import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MoviesRelated.css";
import discover from "../assets/discover.svg";
import trend from "../assets/trend.svg";

import { API_END_POINT, API_KEY } from "../utils/Constant";
import MovieList from "./MovieList";
import MovieCardSmall from "./MovieCardSmall";

const MoviesRelated = ({type, movie_id}) => {
  const [loadRelated, setLoadRelated] = useState(false);
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    setLoadRelated(true);
    Axios.get(API_END_POINT + `/movie/${movie_id}/${type}?api_key=${API_KEY}`)
      .then(res => {
        setLoadRelated(false);
        setRelatedMovies(res.data.results);
      })
      .catch(err => {
        console.log(err);
        setLoadRelated(false);
        setRelatedMovies([]);
      });
  }, []);

  return (
    <div className="MoviesRelated">
        {
            relatedMovies.map(
                movie => <MovieCardSmall key={movie.id} m={movie}/>
            )
        }
    </div>
  );
};

export default MoviesRelated;
