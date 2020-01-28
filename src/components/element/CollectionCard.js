import React from "react";
import { Link } from "react-router-dom";
import "./CollectionCard.css";
import movieLogo from "../../assets/movie-dark.svg";
import { POSTER_PATH } from "../../utils/Constant";

const CollectionCard = ({ collection }) => {
  return (
    <Link className="CollectionCard" to={`/collection/${collection.id}`}>
      <div className="collection-img">
        {collection.backdrop_path ? (
          <img
            className="animate-fadein"
            src={POSTER_PATH + collection.backdrop_path}
            alt="POSTER"
          />
        ) : (
          <img className="animate-fadein" src={movieLogo} alt="POSTER" />
        )}
      </div>
      <div className="collection-text">
        <h5 className="fg fg3">{collection.name}</h5>
      </div>
    </Link>
  );
};

export default CollectionCard;
