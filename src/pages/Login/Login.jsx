import React from "react";
import "./login.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginTop from "./LoginTop";
import LoginBottom from "./LoginBottom";

const Login = () => {
  return (
    <div className="login my-5 col-sm-6 offset-sm-3">
      <Router>
        <LoginTop />
        {/*login top end*/}
        <LoginBottom />
      </Router>
    </div>
  );
};

export default Login;
