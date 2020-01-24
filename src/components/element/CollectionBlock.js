import React from "react";
import "./CollectionBlock.css";
import { POSTER_PATH } from "../../utils/Constant";

const CollectionBlock = ({ collection }) => {
  if (collection)
    return (
      <div className="CollectionBlock">
        <h3 className="fg fg3">Also Included In</h3>
        <hr align="left" className="fg" />
        <img
          className="animate-enlarge"
          src={POSTER_PATH + collection.backdrop_path}
          alt="POSTER"
        />
        <h5 className="fg fg3">{collection.name}</h5>
      </div>
    );
  else return null;
};

export default CollectionBlock;