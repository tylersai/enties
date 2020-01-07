import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axio from "axios";
import "./App.css";

import { API_END_POINT, API_KEY, toQueryString } from "./utils/Constant";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import SearchPage from "./components/SearchPage";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const resetEverything = () => {
    setSearchQuery("");
    setMovieList([]);
    setIsLoading(false);
    document.getElementById("search").style.height = "100vh";
  };

  const clearSearchQuery = () => {
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
        200
      ).onfinish = () => {
        resetEverything();
      };
    } catch {
      resetEverything();
    }
  };

  const processSearch = obj => {
    setIsLoading(true);
    setSearchQuery(obj.query);
    // const searchend = document
    //   .getElementById("searchend")
    //   .getBoundingClientRect().top;
    // document.getElementById("search").style.height = searchend + 30 + "px";
    document.getElementById("search").style.height = "unset";

    const queryObj = {
      api_key: API_KEY
    };
    Object.assign(queryObj, obj);

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
  };

  return (
    <div className="App">
      <section id="search" className="background">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <div id="searchwidgets">
          <Navbar />
          <h1 className="fg fg3 ent-text-shadow" id="lets-watch-movie">
            Let's Watch Movie
          </h1>
          <Search process={processSearch} />
          <br />
          <div id="searchend" />
        </div>
      </section>
      {searchQuery ? (
        <SearchPage
          isLoading={isLoading}
          movieList={movieList}
          searchQuery={searchQuery}
          clearSearchQuery={clearSearchQuery}
        />
      ) : null}
    </div>
  );
}

export default App;
