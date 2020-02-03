import React from "react";
import "./ImageGallery.css";
import { POSTER_PATH } from "../../utils/Constant";

const ImageGallery = ({ images }) => {
  if (!images || images.length < 1) return null;

  return (
    <div className="ImageGallery">
      {images.map(image => (
        <div key={image}>
          <img src={ POSTER_PATH + image} alt=""/>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
