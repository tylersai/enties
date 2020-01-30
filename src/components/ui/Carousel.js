import React from "react";
import "./Carousel.css";

import { POSTER_PATH } from "../../utils/Constant";

const Carousel = ({ imgs }) => {
  return (
    <div className="Carousel" id="jssor_1">
      <div data-u="slides" className="slides">
        {imgs.map((img, i) => (
          <div key={i}>
            <img
              data-u="image"
              src={POSTER_PATH + img.file_path}
              alt="POSTER"
            />
          </div>
        ))}
      </div>

      <div
        data-u="navigator"
        className="jssorb057"
        data-autocenter="1"
        data-scale="0.5"
        data-scale-bottom="0.75"
      >
        <div data-u="prototype" className="i bg bg3">
          <svg viewbox="0 0 16000 16000">
            <circle className="b" cx="8000" cy="8000" r="5000" />
          </svg>
        </div>
      </div>

      <div
        data-u="arrowleft"
        className="jssora073 arrowleft bg bg3"
        data-autocenter="2"
        data-scale="0.75"
        data-scale-left="0.75"
      >
        <svg viewbox="0 0 16000 16000">
          <path
            className="a"
            d="M4037.7,8357.3l5891.8,5891.8c100.6,100.6,219.7,150.9,357.3,150.9s256.7-50.3,357.3-150.9 l1318.1-1318.1c100.6-100.6,150.9-219.7,150.9-357.3c0-137.6-50.3-256.7-150.9-357.3L7745.9,8000l4216.4-4216.4 c100.6-100.6,150.9-219.7,150.9-357.3c0-137.6-50.3-256.7-150.9-357.3l-1318.1-1318.1c-100.6-100.6-219.7-150.9-357.3-150.9 s-256.7,50.3-357.3,150.9L4037.7,7642.7c-100.6,100.6-150.9,219.7-150.9,357.3C3886.8,8137.6,3937.1,8256.7,4037.7,8357.3 L4037.7,8357.3z"
          />
        </svg>
      </div>
      <div
        data-u="arrowright"
        className="jssora073 arrowright bg bg3"
        data-autocenter="2"
        data-scale="0.75"
        data-scale-right="0.75"
      >
        <svg viewbox="0 0 16000 16000">
          <path
            className="a"
            d="M11962.3,8357.3l-5891.8,5891.8c-100.6,100.6-219.7,150.9-357.3,150.9s-256.7-50.3-357.3-150.9 L4037.7,12931c-100.6-100.6-150.9-219.7-150.9-357.3c0-137.6,50.3-256.7,150.9-357.3L8254.1,8000L4037.7,3783.6 c-100.6-100.6-150.9-219.7-150.9-357.3c0-137.6,50.3-256.7,150.9-357.3l1318.1-1318.1c100.6-100.6,219.7-150.9,357.3-150.9 s256.7,50.3,357.3,150.9l5891.8,5891.8c100.6,100.6,150.9,219.7,150.9,357.3C12113.2,8137.6,12062.9,8256.7,11962.3,8357.3 L11962.3,8357.3z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Carousel;
