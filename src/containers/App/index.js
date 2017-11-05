import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../home-page";
import InternsPage from "../interns-page";
import TasksPage from "../tasks-page";
import ProjectsPage from "../projects-page";
class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/interns" component={InternsPage} />
          <Route path="/tasks" component={TasksPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Redirect to="/" />
        </Switch>
      </main>
    );
  }
}

export default App;
