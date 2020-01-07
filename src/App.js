import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={SearchPage} path="/search" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
