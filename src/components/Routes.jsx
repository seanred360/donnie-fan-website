import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
// import VideosPage from "./pages/VideosPage";
import Contact from "./common/Contact";
import NotFound from "./pages/NotFoundPage";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/events" component={EventsPage}></Route>
        {/* <Route exact path="/videos" component={VideosPage}></Route> */}
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="" component={NotFound}></Route>
      </Switch>
    );
  }
}

export default Routes;
