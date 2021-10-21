import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

class Main extends Component {
  state = {
    isLoaded: false,
    error: null,
  };

  render() {
    return (
      <Switch>
        {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path="/not-found" component={NotFound}></Route>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
    );
  }
}

export default Main;
