import React from "react";
import "./Rating.css";

import starEmpty from "../assets/star-empty.svg";
import starHalf from "../assets/star-half.svg";
import starFull from "../assets/star-full.svg";

const Rating = ({ voteCount, voteAverage }) => {

  const rating = voteAverage/2;
  let fullStarCount = parseInt(rating);
  let halfStarCount = 0;
  
  if((rating - fullStarCount) > 0.75)
    fullStarCount += 1;
  else if((rating - fullStarCount) > 0.25)
    halfStarCount = 1;

  let emptyStarCount = 5 - fullStarCount - halfStarCount;

  const stars = [];

    for(let i=0; i<fullStarCount; i++){
      stars.push(<div key={"f"+i} className="star"><img src={starFull} alt="*"/></div>);
    }
    for(let i=0; i<halfStarCount; i++){
      stars.push(<div key={"h"+i} className="star"><img src={starHalf} alt="*"/></div>);
    }
    for(let i=0; i<emptyStarCount; i++){
      stars.push(<div key={"e"+i} className="star"><img src={starEmpty} alt="*"/></div>);
    }
  
  return (
    <div className="Rating">
      {stars}
      <div key="vc" className="vote-count fg fg3">({voteCount})</div>
    </div>
  );
};

export default Rating;