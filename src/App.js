import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import FooterSection from "./components/FooterSection";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={SearchPage} path="/search" />
        </Switch>
      </Router>
      <FooterSection/>
    </div>
  );
}

export default App;
