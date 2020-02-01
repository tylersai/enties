import React, { useState, useEffect } from "react";
import "./Carousel.css";

import { POSTER_PATH } from "../../utils/Constant";

const Carousel = ({ imgs }) => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const slideWidth = document.querySelector(".Carousel .slides")
        .scrollWidth;
      const docWidth = document.documentElement.clientWidth;
      setShowBtn(slideWidth > docWidth);
      console.log(slideWidth, docWidth);
    }, 2500);
  });

  const scrollX = async e => {
    let pixAmt = e.target.id === "btnRight" ? 5 : -5;
    for (let i = 0; i < 30; i++) {
      document.querySelector(".Carousel .slides").scrollLeft += pixAmt;
      await new Promise(r => setTimeout(r, 15));
    }
  };

  if (!imgs || imgs.length < 3) return null;

  return (
    <div className="Carousel">
      {showBtn ? (
        <button onClick={scrollX} id="btnLeft">
          &lsaquo;
        </button>
      ) : null}
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
      {showBtn ? (
        <button onClick={scrollX} id="btnRight">
          &rsaquo;
        </button>
      ) : null}
    </div>
  );
};

export default Carousel;
