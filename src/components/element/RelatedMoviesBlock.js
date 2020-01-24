import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./RelatedMoviesBlock.css";

import { API_END_POINT, API_KEY } from "../../utils/Constant";
import RelatedMovies from "./RelatedMovies";

const RelatedMoviesBlock = ({ movie_id, title, type }) => {

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
  }, [type, movie_id]);

  if(!loadRelated && relatedMovies.length===0) return null;

  return (
    <div className="RelatedMoviesBlock">
      <h3 className="fg fg3">{title}</h3>
      <hr align="left" className="fg fullwidth" />
      <div>
        <RelatedMovies loadRelated={loadRelated} relatedMovies={relatedMovies} />
      </div>
    </div>
  );
};

export default RelatedMoviesBlock;
