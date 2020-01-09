import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axio from "axios";
import "./MovieDetail.css";
import movieLogo from "../assets/movie-dark.svg";

import {
  API_END_POINT,
  API_KEY,
  POSTER_PATH,
  POSTER_PATH_FULL
} from "../utils/Constant";
import Loading from "./Loading";
import Rating from "./Rating";

const MovieDetail = ({ match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setIsLoading(true);
    const fullLink =
      API_END_POINT + `/movie/${match.params.id}?api_key=${API_KEY}`;
    Axio.get(fullLink)
      .then(res => {
        setMovie(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setMovie({});
        setIsLoading(false);
      });
  }, []);

  const renderOverview = () => {
    const dp = document.getElementById("detail-poster").clientHeight;
    const dt = document.getElementById("detail-title").clientHeight;
    let id = "upper";
    if (dt > dp / 2 + 50) {
      id = "lower";
      document.getElementById("lower").style.padding = "4vw";
      document.getElementById("upper").style.display = "none";
    }

    const Overview = props => {
      return (
        <>
          <h3 className="fg fg3">About the Movie</h3>
          <hr className="bgg" />
          <p className="fg fg3">{movie.overview}</p>
        </>
      );
    };
    ReactDOM.render(<Overview />, document.getElementById(id));
  };

  useEffect(() => {
    try{renderOverview();}catch{}
  });

  // const bgStyle = {
  //   'background': `url(${POSTER_PATH_FULL + movie.backdrop_path}) top right no-repeat`,
  //   'background-size': 'contain'
  // };

  const options = { year: "numeric", month: "long", day: "numeric" };

  const solveGenres = genres => {
    return genres.map(g => g.name).join(" \u2022 ");
  };

  return (
    <section className="MovieDetail bg bg1 animate-popup">
      {isLoading ? <div className="center-loading"><Loading/></div> : movie.title ? (
        <>
          <div className="detail-wrapper">
            <div className="detail-poster" id="detail-poster">
              {movie.poster_path ? (
                <img src={POSTER_PATH + movie.poster_path} alt="POSTER" />
              ) : (
                <img src={movieLogo} alt="POSTER" />
              )}
            </div>
            <div className="detail-title">
              <div id="detail-title">
                <h1 className="fg fg2">{movie.title}</h1>
                {movie.vote_count ? (
                  <Rating
                    voteAverage={movie.vote_average}
                    voteCount={movie.vote_count}
                  />
                ) : null}
                {movie.release_date ? (
                  <div className="fg fg3">
                    {new Date(movie.release_date).toLocaleDateString(
                      "en-US",
                      options
                    )}
                  </div>
                ) : null}
                {movie.genres ? (
                  <div className="fg fg3">{solveGenres(movie.genres)}</div>
                ) : null}
                <div id="upper" className="fg fg2" />
              </div>
            </div>
          </div>
          <div id="lower" className="fg fg2" />{" "}
        </>
      ) : (
        <div className="no-movie">
          <img src={movieLogo} alt="POSTER" />
          <div className="fgg">NOT FOUND</div>
        </div>
      )}
    </section>
  );
};

export default MovieDetail;
