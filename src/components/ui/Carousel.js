import React from "react";
import "./Carousel.css";

import { POSTER_PATH } from "../../utils/Constant";

const Carousel = ({ imgs }) => {

  const scrollX = async (e) => {
    let pixAmt = e.target.id === "btnRight" ? 10:-10;
    for(let i=0; i<40; i++){
      document.querySelector('.Carousel .slides').scrollLeft += pixAmt;
      await new Promise(r => setTimeout(r,15));
    }
  };

  if(!imgs || imgs.length === 1)
    return null;

  return (
    <div className="Carousel">
      <button onClick={scrollX} id="btnLeft">&lsaquo;</button>
      <div className="slides">
        {imgs.slice(1).map((img, i) => (
          <img
            key={i}
            className="image animate-fadein"
            src={POSTER_PATH + img.file_path}
            alt="POSTER"
          />
        ))}
      </div>
      <button onClick={scrollX} id="btnRight">&rsaquo;</button>
    </div>
  );
};

export default Carousel;
