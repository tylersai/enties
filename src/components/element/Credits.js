import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Credits.css";

import { API_END_POINT } from "../../utils/Constant";
import ActorLink from "../ui/ActorLink";

const Credits = ({ movie_id }) => {

  const [casts, setCasts] = useState([]);
  const [crews, setCrews] = useState([]);

  useEffect(() => {
    Axios.get(API_END_POINT + `/movie/${movie_id}/credits`)
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
    if (arr && arr.length > 0) {
      arr.forEach(a => {
        if (ids.indexOf(a.id) < 0) {
          ids.push(a.id);
          res.push(a);
        }
      });
    }
    return res;
  };

  if (casts.length === 0 && crews.length === 0)
    return null;

  return (
    <div className="Credits">
      <h3 className="fg fg3 text-center" style={{ marginTop: "7vh" }}>Cast &amp; Crew</h3>
      <hr className="fg" />
      <div className="credit-wrapper">
        {casts.length > 0 ? (<div className="credit-col">
          <div className="left">
            <h4 className="fg fgg">Actors</h4>
          </div>
          <div className="right">
            {
              casts.map(c => <ActorLink aid={c.id} key={c.id + c.credit_id}>{c.name}</ActorLink>)
            }
          </div>
        </div>) : null}
        {crews.length > 0 ? (<div className="credit-col">
          <div className="left">
            <h4 className="fg fgg">Crews</h4>
          </div>
          <div className="right">
            {
              crews.map(c => <ActorLink aid={c.id} key={c.id + c.credit_id}>{c.name}</ActorLink>)
            }
          </div>
        </div>) : null}
      </div>
    </div>
  );
};

export default Credits;
