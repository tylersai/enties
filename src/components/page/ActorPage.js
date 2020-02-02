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
      setIsLoading(true);
      document.title = "Enties \u2022 Actor";
    try {
        const res = await Axio.get(API_END_POINT + `/person/${match.params.aid}?api_key=${API_KEY}`);
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
        <div className="wrapper">
            <div className="profile">
                {
                    actor.profile_path ? (
                        <img className="animate-popup" src={POSTER_PATH + actor.profile_path} alt="PROFILE"/>
                    ):(
                        <img className="animate-fadein" src={actorLogo} alt="PROFILE"/>
                    )
                }
            </div>
            <div className="detail">
                <div>
                    <h1 className="fg fg2 ent-text-shadow">{actor.name}</h1>
                </div>
            </div>
        </div>
      ) : (
        <NoData svgPath={actorLogo} label="ACTOR NOT FOUND" />
      )}
    </section>
  );
};

export default ActorPage;
