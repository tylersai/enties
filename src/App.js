import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./components/page/HomePage";
import SearchPage from "./components/page/SearchPage";
import MovieListPage from "./components/page/MovieListPage";
import MovieDetailPage from "./components/page/MovieDetailPage";

import FooterSection from "./components/section/FooterSection";
import CollectionPage from "./components/page/CollectionPage";
import NoData from "./components/element/NoData";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={SearchPage} path="/search" />
          <Route component={MovieDetailPage} path="/movie/:id" />
          <Route path="/discover" render={ routeProps => (<MovieListPage {...routeProps} title="Discover" link="/discover/movie"/>)} />
          <Route path="/trending" render={ routeProps => (<MovieListPage {...routeProps} title="Trending" link="/trending/movie/week"/>)} />
          <Route path="/keyword/:kid" component={MovieListPage} />
          <Route path="/collection/:cid" component={CollectionPage} />
          <Route render={routeProps => <section className="bg bg1"><NoData {...routeProps}/></section>}/>
        </Switch>
        <FooterSection/>
      </Router>
    </div>
  );
}

export default App;
