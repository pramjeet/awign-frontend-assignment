import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../Dashboard";
class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Redirect to="/dashboard" />
        </Switch>
      </main>
    );
  }
}

export default App;
