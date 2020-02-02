import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Credits.css";

import { API_END_POINT, API_KEY } from "../../utils/Constant";
import ActorLink from "../ui/ActorLink";

const Credits = ({ movie_id }) => {
    
  const [casts, setCasts] = useState([]);
  const [crews, setCrews] = useState([]);

  useEffect(() => {
    Axios.get(API_END_POINT + `/movie/${movie_id}/credits?api_key=${API_KEY}`)
      .then(res => {
        setCasts(res.data.cast);
        setCrews(removeDuplicate(res.data.crew));
      })
      .catch(err => {
        console.log(err);
        setCasts([]);
        setCrews([]);
      });
  }, [movie_id]);

  const removeDuplicate = arr => {
    let res = [];
    let ids = [];
    if(arr){
      arr.forEach(a => {
        if(ids.indexOf(a.id)<0){
          ids.push(a.id);
          res.push(a);
        }
      });
    }
    return res;
  };

  return (
    <div className="Credits">
      { casts.length > 0 || crews.length > 0 ? (<div className="credit-wrapper">
        {casts.length > 0 ? (<div className="credit-col">
            <div className="left">
                <h4 className="fg fgg">Actors</h4>
            </div>
            <div className="right">
                {
                  casts.map(c => <ActorLink aid={c.id} key={c.id + c.credit_id}>{c.name}</ActorLink>)
                }
            </div>
        </div>):null}
        {casts.length > 0 ? (<div className="credit-col">
            <div className="left">
                <h4 className="fg fgg">Crews</h4>
            </div>
            <div className="right">
                {
                  crews.map(c => <ActorLink aid={c.id} key={c.id + c.credit_id}>{c.name}</ActorLink>)
                }
            </div>
        </div>):null}
      </div>) : <div className="fg fgg not-found">INFO NOT AVAILABLE</div>}
    </div>
  );
};

export default Credits;
