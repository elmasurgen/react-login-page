import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const LoginTop = () => {
  return (
    <div className="login__top py-5">
      <div className="d-flex justify-content-center">
        <Link to="/" className="active">
          <h4 className="sign-in mx-3  font-large">Giriş Yap</h4>
        </Link>
        <Link to="/signup">
          <h4 className="sign-up mx-3 font-large">Kayıt Ol</h4>
        </Link>
      </div>
    </div>
  );
};
export default LoginTop;
