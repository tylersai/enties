import React from "react";
import "./ResultSection.css";

import { POSTER_PATH } from '../utils/Constant';

const ResultSection = ({ movieList }) => {
  return (
    <section className="ResultSection" id="result">
      {movieList.map(m => (
        <div key={m.id} className="movie-card">
          <img
            className="poster"
            src={POSTER_PATH + m.poster_path}
            alt="Poster"
          />
          <div className="description">
            <h3>{m.title}</h3>
            <p>{m.overview}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ResultSection;
