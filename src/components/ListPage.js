import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axio from "axios";

import "./ListPage.css";
import cross from "../assets/cross.svg";

import { API_END_POINT } from "../utils/Constant";
import Loading from "./Loading";
import MovieCardList from "./MovieCardList";

const ListPage = ({ link, title, searchQuery }) => {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fullLink = API_END_POINT + link;
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
      <div className="search-desc">
        {searchQuery ? (
          <h4 className="fg fgg">
            {isLoading ? "Searching for : " : "Showing results for : "}
            <span>"{searchQuery}"</span>
          </h4>
        ) : (
          <h4 className="fg fgg">
            <span>{title}</span>
          </h4>
        )}
        <button onClick={closePage} className="fg fg2 bg bg2 clear-search">
          <img src={cross} alt="x" />
        </button>
      </div>

      {isLoading ? <Loading /> : <MovieCardList movieList={movieList} />}
    </section>
  );
};

export default ListPage;
