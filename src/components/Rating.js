import React from "react";
import "./Rating.css";

import starEmpty from "../assets/star-empty.svg";
import starHalf from "../assets/star-half.svg";
import starFull from "../assets/star-full.svg";

const Rating = ({ voteCount, voteAverage }) => {
  return (
    <div className="Rating">
      <div className="star"><img src={starFull} alt="S"/></div>
      <div className="star"><img src={starFull} alt="S"/></div>
      <div className="star"><img src={starFull} alt="S"/></div>
      <div className="star"><img src={starHalf} alt="S"/></div>
      <div className="star"><img src={starEmpty} alt="S"/></div>
      <div className="vote-count">({voteCount})</div>
    </div>
  );
};

export default Rating;