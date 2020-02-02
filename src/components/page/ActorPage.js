import React, { useState, useEffect } from "react";
import "./ActorPage.css";
import Axio from "axios";

import actorLogo from "../../assets/actor.svg";
import { API_END_POINT, API_KEY, POSTER_PATH } from "../../utils/Constant";

import Loading from "../ui/Loading";
import NoData from "../element/NoData";

const ActorPage = ({ match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [actor, setActor] = useState({});

  const fetchData = async () => {
    window.scrollTo(0,0);
    setIsLoading(true);
    document.title = "Enties \u2022 Actor";
    try {
      const res = await Axio.get(
        API_END_POINT + `/person/${match.params.aid}?api_key=${API_KEY}`
      );
      setActor(res.data);
      setIsLoading(false);
      document.title = `Enties \u2022 ${res.data.name}`;
    } catch {
      setActor({});
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [match.params.aid]);

  return (
    <section className="ActorPage bg bg1 animate-popup">
      {isLoading ? (
        <div className="center-loading">
          <Loading />
        </div>
      ) : actor.name ? (
        <>
          <div className="wrapper">
            <div className="profile">
              {actor.profile_path ? (
                <img
                  className="animate-enlarge"
                  src={POSTER_PATH + actor.profile_path}
                  alt="PROFILE"
                />
              ) : (
                <img className="animate-fadein" src={actorLogo} alt="PROFILE" />
              )}
            </div>
            <div className="detail" style={{ position: "relative" }}>
              <div>
                <h1 className="fg fg2 ent-text-shadow">{actor.name}</h1>
                <hr align="left" className="fg" />
                <p className="fg fgg ent-small-text">
                  Known for{" "}
                  <span className="fg3">"{actor.known_for_department}"</span>
                </p>
                <p className="fg fgg ent-small-text">
                  Popularity : <span className="fg3">{actor.popularity}</span>
                </p>
                <p className="fg fg3" style={{ textAlign: "justify" }}>
                  {actor.biography}
                </p>
              </div>
            </div>
          </div>
          <div className="section-detail">
            <h3 className="fg fg3 text-center">Detail Information</h3>
            <hr align="left" className="fg fullwidth" />
            <div>
              <div className="fg fgg section-label">
                Gender :{" "}
                <span className="fg3">
                  {actor.gender === 1 ? "Female" : "Male"}
                </span>
              </div>
            </div>
            {actor.birthday ? (
              <div>
                <div className="fg fgg section-label">
                  Birthday : <span className="fg3">{actor.birthday}</span>
                </div>
              </div>
            ) : null}
            {actor.place_of_birth ? (
              <div>
                <div className="fg fgg section-label">
                  Origin : <span className="fg3">{actor.place_of_birth}</span>
                </div>
              </div>
            ) : null}
            <div>
              <div className="fg fgg section-label">
                Active Status :{" "}
                <span className="fg3">
                  {actor.deathday ? `Died on ${actor.deathday}` : "Alive"}
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <NoData svgPath={actorLogo} label="ACTOR NOT FOUND" />
      )}
    </section>
  );
};

export default ActorPage;
