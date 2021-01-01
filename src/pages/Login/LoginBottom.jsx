import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LoginBottom = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};
export default LoginBottom;
