import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./RelatedMovies.css";

import { API_END_POINT, API_KEY } from "../../utils/Constant";
import MovieCardSmall from "./MovieCardSmall";
import Loading from "../ui/Loading";

const RelatedMovies = ({type, movie_id}) => {
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

  return (
    <div className="RelatedMovies">
        {
          loadRelated ? <Loading/>:relatedMovies.map(
                movie => <MovieCardSmall key={movie.id} m={movie}/>
            )
        }
    </div>
  );
};

export default RelatedMovies;
