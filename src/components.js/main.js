import React from "react";
import { Switch, Route } from "react-router-dom";
import Resume from "./resume";
import LandingPage from "./landingpage";
import About from "./aboutme";
import Projects from "./projects";
import Contact from "./contact";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
};

export default Main;
