import React from "react";

const SignIn = () => {
  return (
    <>
      <div className="login_body py-5">
        <form className="d-flex flex-column">
          <div className="input-group mb-3 px-5">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-envelope" />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="E-mailinizi Giriniz"
              aria-label="E-mailinizi Giriniz"
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <div className="input-group mb-3 px-5">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-key" />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Şifrenizi Giriniz"
              aria-label="Şifrenizi Giriniz"
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <fieldset className="log-in-check px-5 my-3">
            <input
              type="checkbox"
              name="keeplogin"
              id="keeplogin"
              value="yes"
            />
            <label for="keeplogin">
              <h6 className="log-in-check">Beni Hatırla</h6>
            </label>
          </fieldset>
          <div className="buton d-flex justify-content-center">
            <input className="submit" type="submit" value="Giriş Yap" />
          </div>
        </form>
      </div>
      {/*login body end*/}
      <div className="login__bottom form-group forgot mx-5 pt-2 pb-5">
        <a href="#">
          <h5>Şifrenizi mi unuttunuz?</h5>
        </a>
      </div>
      {/*login bottom end*/}
    </>
  );
};
export default SignIn;
