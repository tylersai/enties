import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./RelatedMoviesBlock.css";

import { API_END_POINT } from "../../utils/Constant";
import RelatedMovies from "./RelatedMovies";

const RelatedMoviesBlock = ({ movie_id, title, type, link }) => {

  const [loadRelated, setLoadRelated] = useState(false);
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    setLoadRelated(true);
    const apiLink = link ? link : `/movie/${movie_id}/${type}`;
    Axios.get(API_END_POINT + apiLink)
      .then(res => {
        setLoadRelated(false);
        if (link) {
          setRelatedMovies(res.data[type]);
        } else {
          setRelatedMovies(res.data.results);
        }
      })
      .catch(err => {
        console.log(err);
        setLoadRelated(false);
        setRelatedMovies([]);
      });
  }, [type, movie_id, link]);

  if (!loadRelated && relatedMovies.length === 0) return null;

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
