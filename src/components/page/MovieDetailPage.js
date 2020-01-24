import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axio from "axios";

import "./MovieDetailPage.css";
import movieLogo from "../../assets/movie-dark.svg";
import { API_END_POINT, API_KEY, POSTER_PATH } from "../../utils/Constant";

import Loading from "../ui/Loading";
import Rating from "../ui/Rating";
import PriceTag from "../ui/PriceTag";

import Trailers from "../element/Trailers";
import Credits from "../element/Credits";
import CollectionBlock from "../element/CollectionBlock";
import RelatedMoviesBlock from "../element/RelatedMoviesBlock";
import KeywordsBlock from "../element/KeywordsBlock";

const MovieDetailPage = ({ match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
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
  }, [match.params.id]);

  const renderOverview = () => {
    let id = "upper";

    const dp = document.getElementById("detail-poster").clientHeight;
    const dt = document.getElementById("detail-title").clientHeight;
    console.log(dp, dt);

    if (dt > dp / 2) {
      id = "lower";
      document.getElementById("upper").style.display = "none";
    }
    const Overview = props => {
      return (
        <>
          <h3 className="fg fg3">About the Movie</h3>
          <hr align="left" className="fg" />
          <p className="fg fg3">{movie.overview}</p>
        </>
      );
    };
    console.log(id);
    ReactDOM.render(<Overview />, document.getElementById(id));
  };

  useEffect(() => {
    try {
      renderOverview();
    } catch {}
  });

  const options = { year: "numeric", month: "long", day: "numeric" };

  const solveGenres = genres => {
    return genres.map(g => g.name).join(" \u2022 ");
  };

  return (
    <section className="MovieDetailPage bg bg1 animate-popup">
      {isLoading ? (
        <div className="center-loading">
          <Loading />
        </div>
      ) : movie.title ? (
        <>
          <div className="detail-wrapper">
            <div className="detail-poster" id="detail-poster">
              {movie.poster_path ? (
                <img
                  className="animate-enlarge"
                  src={POSTER_PATH + movie.poster_path}
                  alt="POSTER"
                />
              ) : (
                <img className="animate-enlarge" src={movieLogo} alt="POSTER" />
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
          <div className="detail-sections">
            <div style={{marginBottom: "1vmax"}}>
              <div className="fg fg3 section-label">Download : </div>
              <PriceTag popularity={movie.popularity} />
            </div>

            <KeywordsBlock movie_id={movie.id} />

            <div id="lower" className="fg fg2" />

            <CollectionBlock collection={movie.belongs_to_collection} />

            <RelatedMoviesBlock
              title="You Might Also Like"
              type="similar"
              movie_id={movie.id}
            />

            <RelatedMoviesBlock
              title="Viewers Also Bought"
              type="recommendations"
              movie_id={movie.id}
            />

            <div>
              <h3 className="fg fg3 text-center" style={{marginTop:"7vh"}}>Cast &amp; Crew</h3>
              <hr align="left" className="fg fullwidth" />
              <Credits movie_id={movie.id} />
            </div>

            <Trailers movie_id={movie.id} />
          </div>
        </>
      ) : (
        <div className="no-movie">
          <img className="animate-enlarge" src={movieLogo} alt="POSTER" />
          <div className="fgganimate-enlarge">NOT FOUND</div>
        </div>
      )}
    </section>
  );
};

export default MovieDetailPage;