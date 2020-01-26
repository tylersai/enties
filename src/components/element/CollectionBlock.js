import React from "react";
import "./CollectionBlock.css";
import CollectionCard from "./CollectionCard";

const CollectionBlock = ({ collection }) => {
  if (collection)
    return (
      <div className="CollectionBlock">
        <h3 className="fg fg3">Also Included In</h3>
        <hr align="left" className="fg" />
        <CollectionCard collection={collection}/>
      </div>
    );
  else return null;
};

export default CollectionBlock;