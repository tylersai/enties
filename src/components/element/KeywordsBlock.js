import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./KeywordsBlock.css";

import { API_END_POINT, API_KEY } from "../../utils/Constant";

import Keyword from "../ui/Keyword";

const KeywordsBlock = ({ movie_id }) => {
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

  if(keywords.length > 0)
  return (
    <div>
      <div className="fg fg3 section-label">Keywords : </div>
      {keywords.map(kw => <Keyword key={kw.id} keyword={kw}/>)}
    </div>
  );
  else return null;
};

export default KeywordsBlock;
