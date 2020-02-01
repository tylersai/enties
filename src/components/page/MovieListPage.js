import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axio from "axios";

import "./MovieListPage.css";
import cross from "../../assets/cross.svg";
import { API_END_POINT, API_KEY } from "../../utils/Constant";

import Loading from "../ui/Loading";
import ThemeButton from "../ui/ThemeButton";
import MovieCardList from "../element/MovieCardList";

const MovieListPage = ({ link, title, match }) => {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [keywordName, setKeywordName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const fullLink =
      API_END_POINT +
      (match.params.kid ? `/keyword/${match.params.kid}/movies` : link) +
      `?api_key=${API_KEY}`;
    Axio.get(fullLink)
      .then(res => {
        setMovieList(res.data.results);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setMovieList([]);
        setIsLoading(false);
      });
  }, [link, match.params.kid]);

  useEffect(() => {
    if (match.params.kid) {
      const klink =
        API_END_POINT + `/keyword/${match.params.kid}?api_key=${API_KEY}`;
      Axio.get(klink)
        .then(res => {
          setKeywordName(res.data.name);
          document.title = `Enties \u2022 "${res.data.name}"`;
        })
        .catch(err => {
          setKeywordName("");
          document.title = `Enties \u2022 Keyword`;
        });
    } else {
      document.title = `Enties \u2022 ${title}`;
    }
  }, [match.params.kid]);

  const closePage = () => {
    try {
      document.getElementById("result").animate(
        [
          {
            opacity: 1,
            transform: "translateY(0)"
          },
          {
            opacity: 0,
            transform: "translateY(10vh)"
          }
        ],
        {
          duration: 200,
          fill: "forwards"
        }
      ).onfinish = () => {
        history.goBack();
      };
    } catch {
      history.goBack();
    }
  };

  return (
    <section className="MovieListPage bg bg1 animate-popup" id="result">
      <div className="title-bar">
        {match.params.kid && keywordName ? (
          <div>
            <h4 style={{ display: "inline-block", marginRight: "8px"}} className="fg fgg animate-enlarge">Keyword:</h4>
            <span className="fg fg3 bg bg2 keyword animate-enlarge">{keywordName}</span>
          </div>
        ) : (
          <h2 className="ent-text-shadow">{title}</h2>
        )}

        <ThemeButton />
        <button
          onClick={closePage}
          className="fg fg2 close-page animate-enlarge"
        >
          <img src={cross} alt="x" />
        </button>
      </div>

      {isLoading ? <Loading /> : <MovieCardList movieList={movieList} />}
    </section>
  );
};

export default MovieListPage;
