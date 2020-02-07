import React from "react";
import { Link } from "react-router-dom";
import "./ActorCard.css";
import actorGreenLogo from "../../assets/actor-green.svg";
import { POSTER_PATH } from "../../utils/Constant";

const ActorCard = ({ actor }) => {
  return (
    <Link className="ActorCard" to={`/actor/${actor.id}`}>
      <div className="actor-img">
        {actor.profile_path ? (
          <img
            className="animate-fadein profile"
            src={POSTER_PATH + actor.profile_path}
            alt="PROFILE"
          />
        ) : (
          <img className="animate-fadein no-profile" src={actorGreenLogo} alt="PROFILE" />
        )}
      </div>
      <div className="actor-text">
        <h5 className="fg fg3 text-center">{actor.name}</h5>
      </div>
    </Link>
  );
};

export default ActorCard;
