import React, { useState } from "react";
import Axio from "axios";
import "./App.css";

import { API_END_POINT, API_KEY, toQueryString } from "./utils/Constant";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ResultSection from "./components/ResultSection";
import LoadingSection from "./components/LoadingSection";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const processSearch = async obj => {
    setIsLoading(true);
    const searchend = document
      .getElementById("searchend")
      .getBoundingClientRect().top;
    document.getElementById("search").style.height = searchend + 30 + "px";

    const queryObj = {
      api_key: API_KEY
    };
    Object.assign(queryObj, obj);

    const link = API_END_POINT + "/search/movie?" + toQueryString(queryObj);
    const res = await Axio.get(link);
    setMovieList(res.data.results);
    setIsLoading(false);
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
      {isLoading ? (
        <LoadingSection/>
      ) : (
        <ResultSection movieList={movieList} />
      )}
    </div>
  );
}

export default App;
