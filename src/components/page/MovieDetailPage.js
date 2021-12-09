import React, { useState, useEffect, useContext } from "react";
import Axio from "axios";

import "./MovieDetailPage.css";
import movieDark from "../../assets/movie-dark.svg";
import movieLight from "../../assets/movie-light.svg";
import { API_END_POINT, POSTER_PATH } from "../../utils/Constant";

import Loading from "../ui/Loading";
import Rating from "../ui/Rating";
import PriceTag from "../ui/PriceTag";

import Trailers from "../element/Trailers";
import Credits from "../element/Credits";
import CollectionBlock from "../element/CollectionBlock";
import RelatedMoviesBlock from "../element/RelatedMoviesBlock";
import ImageGallery from "../ui/ImageGallery";
import KeywordsBlock from "../element/KeywordsBlock";
import NoData from "../element/NoData";
import { ThemeContext } from "../../utils/Theme";
import ReviewsBlock from "../element/ReviewsBlock";

const MovieDetailPage = ({ match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});

  const context = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const fullLink = API_END_POINT + `/movie/${match.params.id}`;
    Axio.get(fullLink)
      .then((res) => {
        setMovie(res.data);
        setIsLoading(false);
        document.title = `Enties \u2022 ${res.data.title}`;
      })
      .catch((err) => {
        document.title = "Enties \u2022 Movie Details";
        setMovie({});
        setIsLoading(false);
      });
  }, [match.params.id]);

  const options = { year: "numeric", month: "long", day: "numeric" };

  const solveGenres = (genres) => {
    return genres.map((g) => g.name).join(" \u2022 ");
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
            <div className="detail-poster fg fgg" id="detail-poster">
              {movie.poster_path ? (
                <img
                  className="animate-fadein"
                  src={POSTER_PATH + movie.poster_path}
                  alt="POSTER"
                />
              ) : (
                <img
                  className="animate-fadein"
                  src={context.theme === "dark" ? movieDark : movieLight}
                  alt="POSTER"
                />
              )}
            </div>
            <div className="detail-title">
              <div id="detail-title">
                <h1 className="fg fg2 ent-text-shadow">{movie.title}</h1>
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
              </div>
            </div>
            <div className="detail-desc">
              <h3 className="fg fg3">Overview</h3>
              <p className="fg fg3">{movie.overview}</p>
            </div>
          </div>
          <div className="detail-sections">
            <div style={{ marginBottom: "1vmax" }}>
              <div className="fg fg3 section-label">Download : </div>
              <PriceTag popularity={movie.popularity} />
            </div>

            <KeywordsBlock movie_id={movie.id} />

            <CollectionBlock collection={movie.belongs_to_collection} />

            <ReviewsBlock movie_id={movie.id} />

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

            <ImageGallery title="Related Images" id={movie.id} type="movie" />

            <Credits movie_id={movie.id} />

            <Trailers movie_id={movie.id} />
          </div>
        </>
      ) : (
        <NoData
          svgPath={context.theme === "dark" ? movieDark : movieLight}
          label="MOVIE NOT FOUND"
        />
      )}
    </section>
  );
};

export default MovieDetailPage;
