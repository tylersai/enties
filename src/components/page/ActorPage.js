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

  return (
    <section className="ActorPage bg bg1 animate-popup">
      {isLoading ? (
        <div className="center-loading">
          <Loading />
        </div>
      ) : actor.name ? (
        <div />
      ) : (
        <NoData svgPath={actorLogo} label="ACTOR NOT FOUND" />
      )}
    </section>
  );
};

export default ActorPage;
