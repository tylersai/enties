import React, { useState, useEffect } from "react";
import Axio from "axios";
import "./Trailers.css";
import { API_END_POINT, API_KEY } from "../utils/Constant";

const Trailers = ({ movie_id }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const link = API_END_POINT + `/movie/${movie_id}/videos?api_key=${API_KEY}`;
    Axio.get(link)
      .then(res => {
        setVideos(res.data.results);
      })
      .catch(err => {
        console.log(err);
        setVideos([]);
      });
  });

  if (!(videos && videos.length > 0)) return null;

  return (
    <div className="Trailers">
      <h3 className="fg fg2">Trailers</h3>
      <hr align="left" className="bgg fullwidth"/>
      <div className="video-wrapper">
        {videos.map(video => (
          <div key={video.id} className="video-col">
            <div className="video-container">
              <iframe
                title={video.name}
                src={`https://www.youtube.com/embed/${video.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h4 className="fg fg2">{video.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trailers;
