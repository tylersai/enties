import React from "react";
import "./CollectionParts.css";
import MovieCard from "./MovieCard";

const CollectionParts = ({ parts }) => {
  return (
    <div className="CollectionParts">
      <h3 className="fg fg3">Movies in This Bundle</h3>
      <hr align="left" className="fg fullwidth" />
      <div className="wrapper">
        {parts.map(m => (
          <MovieCard m={m} key={m.id} />
        ))}
      </div>
    </div>
  );
};

export default CollectionParts;
