import React, { useState, useEffect } from "react";
import Axio from "axios";
import "./ImageGallery.css";
import { API_END_POINT, POSTER_PATH } from "../../utils/Constant";

const ImageGallery = ({ id, type, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const apiLink = `${API_END_POINT}/${type}/${id}/images`;
      const res = await Axio.get(apiLink);
      if (type === "person") {
        setImages(res.data.profiles.map((p) => p.file_path).slice(0, 12));
      } else if (type === "movie") {
        setImages(res.data.backdrops.map((p) => p.file_path).slice(0, 12));
      }
      setIsLoading(false);
    } catch {
      setImages([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, type]);

  if (isLoading || images.length < 1) return null;

  return (
    <div className="ImageGallery">
      <h3 className="fg fg3 text-center">{title}</h3>
      <hr align="left" className="fg fullwidth" />
      <div className="gallery">
        {images.map((image) => (
          <div key={image} className="fg fgg">
            <img
              className="animate-fadein"
              src={POSTER_PATH + image}
              alt="IMG"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
