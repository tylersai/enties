import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Keywords.css";

import { API_END_POINT, API_KEY } from "../../utils/Constant";

const Keywords = ({ movie_id }) => {
    
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    Axios.get(API_END_POINT + `/movie/${movie_id}/keywords?api_key=${API_KEY}`)
      .then(res => {
        setKeywords(res.data.keywords);
      })
      .catch(err => {
        console.log(err);
        setKeywords([]);
      });
  }, [movie_id]);

  return (
    <>
    {
        keywords.map(kw => <div key={kw.id} className="fg fg3 bg bg2 keyword">{kw.name}</div>)
    }
    </>
  );
};

export default Keywords;
