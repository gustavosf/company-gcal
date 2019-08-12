import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GoogleAuth from "./Components/Pages/GoogleAuth";
import CalendarApp from "./Components/Pages/CalendarApp";

import { init } from "./Redux/Actions";

const App = ({ init, auth }) => {
  useEffect(() => {
    window.gapi.load("client", init);
  }, [init]);
  return (
    <Router>
      <Switch>
        <Route path="/gauth" component={GoogleAuth} exact />
        <Route path="/" component={auth ? CalendarApp : GoogleAuth} />
      </Switch>
    </Router>
  );
};

export default connect(
  ({ auth }) => ({ auth }),
  { init }
)(App);
