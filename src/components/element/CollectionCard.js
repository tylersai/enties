import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./CollectionCard.css";
import movieDark from "../../assets/movie-dark.svg";
import movieLight from "../../assets/movie-light.svg";
import { POSTER_PATH } from "../../utils/Constant";
import { ThemeContext } from "../../utils/Theme";

const CollectionCard = ({ collection }) => {

  const context = useContext(ThemeContext);

  return (
    <Link className="CollectionCard" to={`/collection/${collection.id}`}>
      <div className="collection-img fg fgg">
        {collection.backdrop_path ? (
          <img
            className="animate-fadein"
            src={POSTER_PATH + collection.backdrop_path}
            alt="POSTER"
          />
        ) : (
            <img className="animate-fadein" src={context.theme === "dark" ? movieDark : movieLight} alt="POSTER" />
          )}
      </div>
      <div className="collection-text">
        <h5 className="fg fg3">{collection.name}</h5>
      </div>
    </Link>
  );
};

export default CollectionCard;
