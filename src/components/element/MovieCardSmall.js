import React from "react";
import { useHistory } from "react-router-dom";
import "./MovieCardSmall.css";

import { POSTER_PATH } from "../../utils/Constant";

const MovieCardSmall = ({ m }) => {

  const history = useHistory();
  const goDetail = () => { history.push(`/movie/${m.id}`) };

  return (
    <div onClick={goDetail} className="MovieCardSmall animate-enlarge">
      <img src={POSTER_PATH + m.poster_path} alt="POSTER"/>
      <div>
          <h5 className="fg fg3">{m.title}</h5>
      </div>
    </div>
  );
};

export default MovieCardSmall;
