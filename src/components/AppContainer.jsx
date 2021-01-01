import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ThemeContext from "../Context/ThemeContext";

import Login from '../pages/Login/Login'

const AppContainer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <Login />
    </main>
  );
};

export default AppContainer;
