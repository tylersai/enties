import React, {useEffect} from "react";
import "./Carousel.css";

import { POSTER_PATH } from "../../utils/Constant";

const Carousel = ({ imgs }) => {

  const scrollRight = async () => {
    // setInterval(()=> {
    //   document.querySelector('.Carousel .slides').scrollLeft += 4;
    // }, 30);
    for(let i=0; i<40; i++){
      document.querySelector('.Carousel .slides').scrollLeft += 10;
      await new Promise(r => setTimeout(r,15));
    }
  }

  return (
    <div className="Carousel">
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
      <button onClick={scrollRight} style={{backgroundColor:"transparent", color:"var(--reactgreen)", fontSize:"50px"}}>&rsaquo;</button>
    </div>
  );
};

export default Carousel;
