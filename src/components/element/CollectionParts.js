import React from "react";
import "./CollectionParts.css";
import MovieCard from "./MovieCard";

const CollectionParts = ({ parts }) => {

  return (
    <div className="CollectionParts">
      {parts.map(m => (
        <MovieCard m={m} />
      ))}
    </div>
  );
};

export default CollectionParts;
