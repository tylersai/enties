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

const NotFound = () => (
  <section className="bg bg1">
    <NoData />
  </section>
);

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
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />}>
              <Route path="movie" element={<SearchByTypePage />} />
            </Route>
            <Route path="/movie/:mid" element={<MovieDetailPage />} />
            <Route path="/discover" element={<MovieListPage title="Discover" link="/discover/movie" />} />
            <Route path="/trending" element={<MovieListPage title="Trending" link="/trending/movie/week" />} />
            <Route path="/highest-rated" element={<MovieListPage title="Highest Rated" link="/movie/top_rated" />} />
            <Route path="/keyword/:kid" element={<MovieListPage />} />
            <Route path="/collection/:cid" element={<CollectionPage />} />
            <Route path="/actor/:aid" element={<ActorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FooterSection />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
