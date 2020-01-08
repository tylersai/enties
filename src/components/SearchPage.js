import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axio from "axios";
import queryString from "query-string";

import "./SearchPage.css";
import cross from "../assets/cross.svg";

import { API_END_POINT, API_KEY, toQueryString } from "../utils/Constant";
import Loading from "./Loading";
import MovieCard from "./MovieCard";

const SearchPage = props => {

  const history = useHistory();

  const queryParams = queryString.parse(props.location.search);
  const searchQuery = queryParams.q ? queryParams.q.replace("+", " ").trim() : "";

  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);

      const queryObj = {
        api_key: API_KEY,
        query: searchQuery
      };

      const link = API_END_POINT + "/search/movie?" + toQueryString(queryObj);
      Axio.get(link)
        .then(res => {
          setMovieList(res.data.results);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setMovieList([]);
          setIsLoading(false);
        });
    }
  }, []);

  const closeSearch = () => {
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
    <section className="SearchPage bg bg1 animate-popup" id="result">
      {searchQuery ? (
        <div className="search-desc">
          <h4 className="fg fgg">
            {isLoading ? "Searching for : " : "Showing results for : "}
            <span>"{searchQuery}"</span>
          </h4>
          <button
            onClick={closeSearch}
            className="fg fg2 bg bg2 clear-search"
          >
            <img src={cross} alt="x" />
          </button>
        </div>
      ) : null}
      {isLoading ? (
        <Loading />
      ) : movieList.length !== 0 ? (
        <div className="res-wrapper">
          {movieList.map(m => (
            <MovieCard key={m.id} m={m} />
          ))}
        </div>
      ) : (
        <div className="fg fgg not-found">NOT FOUND</div>
      )}
    </section>
  );
};

export default SearchPage;
