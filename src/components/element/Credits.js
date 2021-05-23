import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Credits.css";

import { API_END_POINT } from "../../utils/Constant";
import ActorLink from "../ui/ActorLink";

const Credits = ({ movie_id }) => {
  const [casts, setCasts] = useState([]);
  const [crews, setCrews] = useState([]);
  const [castsDisplay, setCastsDisplay] = useState([]);
  const [crewsDisplay, setCrewsDisplay] = useState([]);

  useEffect(() => {
    Axios.get(API_END_POINT + `/movie/${movie_id}/credits`)
      .then((res) => {
        const casts = res.data.cast;
        const crews = removeDuplicate(res.data.crew);
        setCasts(casts);
        setCrews(crews);
        setCastsDisplay(casts.slice(0, 20));
        setCrewsDisplay(crews.slice(0, 20));
      })
      .catch((err) => {
        console.log(err);
        setCasts([]);
        setCrews([]);
        setCastsDisplay([]);
        setCrewsDisplay([]);
      });
  }, [movie_id]);

  const removeDuplicate = (arr) => {
    let res = [];
    let ids = [];
    if (arr && arr.length > 0) {
      arr.forEach((a) => {
        if (ids.indexOf(a.id) < 0) {
          ids.push(a.id);
          res.push(a);
        }
      });
    }
    return res;
  };

  const moreCasts = (e) => {
    e.preventDefault();
    setCastsDisplay([
      ...castsDisplay,
      ...casts.slice(castsDisplay.length, castsDisplay.length + 10),
    ]);
  };

  const moreCrews = (e) => {
    e.preventDefault();
    setCrewsDisplay([
      ...crewsDisplay,
      ...crews.slice(crewsDisplay.length, crewsDisplay.length + 10),
    ]);
  };

  if (casts.length === 0 && crews.length === 0) return null;

  return (
    <div className="Credits">
      <h3 className="fg fg3 text-center" style={{ marginTop: "7vh" }}>
        Cast &amp; Crew
      </h3>
      <hr className="fg" />
      <div className="credit-wrapper">
        {casts.length > 0 ? (
          <div className="credit-col">
            <div className="left">
              <h4 className="fg fgg">Actors</h4>
            </div>
            <div className="right">
              {castsDisplay.map((c) => (
                <ActorLink aid={c.id} key={c.id + c.credit_id}>
                  {c.name}
                </ActorLink>
              ))}
              {casts.length > 20 && castsDisplay.length !== casts.length && (
                <a
                  href="/"
                  className="fg fg-primary ent-small-text more-link"
                  onClick={moreCasts}
                >
                  + More
                </a>
              )}
            </div>
          </div>
        ) : null}
        {crews.length > 0 ? (
          <div className="credit-col">
            <div className="left">
              <h4 className="fg fgg">Crews</h4>
            </div>
            <div className="right" id="crew-right">
              {crewsDisplay.map((c) => (
                <ActorLink aid={c.id} key={c.id + c.credit_id}>
                  {c.name}
                </ActorLink>
              ))}
              {crews.length > 20 && crewsDisplay.length !== crews.length && (
                <a
                  href="/"
                  className="fg fg-primary ent-small-text more-link"
                  onClick={moreCrews}
                >
                  + More
                </a>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Credits;
