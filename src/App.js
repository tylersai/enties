import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import FooterSection from "./components/FooterSection";
import ListPage from "./components/ListPage";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={SearchPage} path="/search" />
          <Route path="/discover" render={ routeProps => (<ListPage {...routeProps} title="Discover" link="/discover/movie"/>)} />
          <Route path="/trending" render={ routeProps => (<ListPage {...routeProps} title="Trending" link="/trending/movie/week"/>)} />
        </Switch>
      </Router>
      <FooterSection/>
    </div>
  );
}

export default App;
