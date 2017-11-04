import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../home-page";
import InternsPage from "../interns-page";
class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/interns" component={InternsPage} />
          <Redirect to="/" />
        </Switch>
      </main>
    );
  }
}

export default App;
