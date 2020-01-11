import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Credits.css";

import { API_END_POINT, API_KEY } from "../utils/Constant";

const Credits = ({ movie_id }) => {
    
  const [casts, setCasts] = useState([]);
  const [crews, setCrews] = useState([]);

  useEffect(() => {
    Axios.get(API_END_POINT + `/movie/${movie_id}/credits?api_key=${API_KEY}`)
      .then(res => {
        setCasts(res.data.cast);
        setCrews(res.data.crew);
      })
      .catch(err => {
        console.log(err);
        setCasts([]);
        setCrews([]);
      });
  }, []);

  return (
    <div className="Credits">
      { casts.length > 0 || crews.length > 0 ? (<div className="credit-wrapper">
        {casts.length > 0 ? (<div className="credit-col">
            <div className="left">
                <h4 className="fg fgg">Actors</h4>
            </div>
            <div className="right">
                {
                    casts.map(c => <span className="fg fg3" key={c.id}>{c.name}</span>)
                }
            </div>
        </div>):null}
        {casts.length > 0 ? (<div className="credit-col">
            <div className="left">
                <h4 className="fg fgg">Crews</h4>
            </div>
            <div className="right">
                {
                    crews.map(c => <span className="fg fg3" key={c.id}>{c.name}</span>)
                }
            </div>
        </div>):null}
      </div>) : <div className="fg fgg not-found">NOT FOUND</div>}
    </div>
  );
};

export default Credits;
