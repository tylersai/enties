import React from "react";
import { Link } from "react-router-dom";
import "./ActorLink.css";

const ActorLink = ({aid, children}) => {
    return (
        <div className="ActorLink fg ent-small-text">
            <Link to={`/actor/${aid}`}>{children} &rsaquo;</Link>
        </div>
    );
};

export default ActorLink;