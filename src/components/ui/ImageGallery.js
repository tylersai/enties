import React, { useState, useEffect } from "react";
import Axio from "axios";
import "./ImageGallery.css";
import { API_END_POINT, API_KEY, POSTER_PATH } from "../../utils/Constant";

const ImageGallery = ({ id, type, title }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiLink = `${API_END_POINT}/${type}/${id}/images?api_key=${API_KEY}`;
    Axio.get(apiLink)
      .then(res => {
        if (type === "person")
          setImages(res.data.profiles.map(p => p.file_path));
      })
      .then(err => {
        setImages([]);
      });
  }, [id, type]);

  if (!images || images.length < 1) return null;

  return (
    <div className="ImageGallery">
        <h3 className="fg fg3 text-center">{title}</h3>
      <hr align="left" className="fg fullwidth" />
      <div className="gallery">
        {images.map(image => (
          <div key={image}>
            <img src={POSTER_PATH + image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
