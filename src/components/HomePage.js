import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import "./HomePage.css";

import Navbar from "./Navbar";
import Search from "./Search";
import DiscoverSection from "./DiscoverSection";

function HomePage() {

  const history = useHistory();

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
          <h1 className="fg fg3 ent-text-shadow" id="lets-watch-movie">
            Let's Watch Movie
          </h1>
          <h4 className="fg fg3 label">Search 100,000+ movies, discover new releases, and see what's trending.</h4>
          <Search process={processSearch} />
        </div>
      </section>
      <DiscoverSection/>
    </Fragment>
  );
}

export default HomePage;
