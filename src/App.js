import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./components/page/HomePage";
import SearchByTypePage from "./components/page/SearchByTypePage";
import SearchPage from "./components/page/SearchPage";
import MovieListPage from "./components/page/MovieListPage";
import MovieDetailPage from "./components/page/MovieDetailPage";

import FooterSection from "./components/section/FooterSection";
import CollectionPage from "./components/page/CollectionPage";
import NoData from "./components/element/NoData";
import ActorPage from "./components/page/ActorPage";
import { ThemeContext, toggleTheme } from "./utils/Theme";
import SearchBar from "./components/ui/SearchBar";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    toggleTheme();
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className="App">
        <Router>
          <SearchBar />
          <Routes>
            <Route children={HomePage} path="/" />
            <Route children={SearchByTypePage} path="/search/movie" />
            <Route children={SearchPage} path="/search" />
            <Route children={MovieDetailPage} path="/movie/:id" />
            <Route path="/discover">
              <MovieListPage title="Discover" link="/discover/movie" />
            </Route>
            <Route path="/trending">
              <MovieListPage title="Trending" link="/trending/movie/week" />
            </Route>
            <Route path="/highest-rated">
              <MovieListPage title="Highest Rated" link="/movie/top_rated" />
            </Route>
            <Route path="/keyword/:kid" children={MovieListPage} />
            <Route path="/collection/:cid" children={CollectionPage} />
            <Route path="/actor/:aid" children={ActorPage} />
            <Route>
              <section className="bg bg1">
                <NoData />
              </section>
            </Route>
          </Routes>
          <FooterSection />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
