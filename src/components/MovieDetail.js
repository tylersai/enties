import React, { useState, useEffect } from "react";
import Axio from "axios";
import "./MovieDetail.css";

import { API_END_POINT, API_KEY } from "../utils/Constant";
import Loading from "./Loading";

const MovieDetail = ({ match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setIsLoading(true);
    const fullLink = API_END_POINT + `/movie/${match.params.id}?api_key=${API_KEY}`;
    Axio.get(fullLink)
      .then(res => {
        setMovie(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setMovie({});
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="MovieDetail bg bg1 animate-popup">
      <h1 className="fg fgg not-found">{movie.title}</h1>
    </section>
  );
};

export default MovieDetail;
