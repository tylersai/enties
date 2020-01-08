import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axio from "axios";

import "./ListPage.css";
import cross from "../assets/cross.svg";

import { API_END_POINT, API_KEY } from "../utils/Constant";
import Loading from "./Loading";
import MovieCardList from "./MovieCardList";

const ListPage = ({ link, title }) => {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fullLink = API_END_POINT + link + `?api_key=${API_KEY}`;
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
  }, []);

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
    <section className="ListPage bg bg1 animate-popup" id="result">
      <div className="title-bar">
        <h2>{title}</h2>
        <button onClick={closePage} className="fg fg2 bg bg2 close-page">
          <img src={cross} alt="x" />
        </button>
      </div>

      {isLoading ? <Loading /> : <MovieCardList movieList={movieList} />}
    </section>
  );
};

export default ListPage;
