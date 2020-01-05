import React, { useState } from "react";
import Axio from "axios";
import "./App.css";

import { API_END_POINT, API_KEY, toQueryString } from "./utils/Constant";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ResultSection from "./components/ResultSection";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
          <br />
          <h1 className="ent-text-shadow">Let's Watch Movie</h1>
          <br />
          <Search process={processSearch} />
          <br />
          <div id="searchend" />
        </div>
      </section>
      <ResultSection isLoading={isLoading} movieList={movieList} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
