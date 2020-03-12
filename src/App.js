import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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

const App = () => {

  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light":"dark");
    toggleTheme();
  };

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
    <div className="App">
      <Router>
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={SearchByTypePage} path="/search/movie" />
          <Route component={SearchPage} path="/search" />
          <Route component={MovieDetailPage} path="/movie/:id" />
          <Route path="/discover" render={ routeProps => (<MovieListPage {...routeProps} title="Discover" link="/discover/movie"/>)} />
          <Route path="/trending" render={ routeProps => (<MovieListPage {...routeProps} title="Trending" link="/trending/movie/week"/>)} />
          <Route path="/highest-rated" render={ routeProps => (<MovieListPage {...routeProps} title="Highest Rated" link="/movie/top_rated"/>)} />
          <Route path="/keyword/:kid" component={MovieListPage} />
          <Route path="/collection/:cid" component={CollectionPage} />
          <Route path="/actor/:aid" component={ActorPage} />
          <Route render={routeProps => <section className="bg bg1"><NoData {...routeProps}/></section>}/>
        </Switch>
        <FooterSection/>
      </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
