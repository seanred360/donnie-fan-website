import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";

class Main extends Component {
  state = {
    isLoaded: false,
    error: null,
  };

  render() {
    return (
      <Switch>
        {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="" component={NotFound}></Route>
      </Switch>
    );
  }
}

export default Main;
