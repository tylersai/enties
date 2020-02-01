import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./HomePage.css";

import Navbar from "../ui/Navbar";
import SearchForm from "../ui/SearchForm";
import DiscoverSection from "../section/DiscoverSection";

function HomePage() {

  const history = useHistory();

  useEffect(() => {
    document.title = "Enties";
  }, []);

  const processSearch = (qs) => history.push(`/search?q=${qs}`);

  return (
    <Fragment>
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
          <h1 className="fg fg3 ent-text-shadow animate-popup-1" id="lets-watch-movie">
            Let's Watch Movie
          </h1>
          <h4 className="fg fg3 label animate-popup-2">Search 100,000+ movies, discover new releases, and see what's trending.</h4>
          <SearchForm process={processSearch} />
        </div>
      </section>
      <DiscoverSection/>
    </Fragment>
  );
}

export default HomePage;
