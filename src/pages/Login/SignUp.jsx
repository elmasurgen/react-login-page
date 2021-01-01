import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="login_body py-5">
        <form className="d-flex flex-column">
          <div className="input-group mb-3 px-5">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-user" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Adınız.."
              aria-label="Adınız.."
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <div className="input-group mb-3 px-5">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-user-plus" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Soyadınız.."
              aria-label="Soyadınız.."
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <div className="input-group mb-3 px-5">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-phone" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="İletişim Numaranız.."
              aria-label="İletişim Numaranız.."
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <div className="input-group mb-3 px-5">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-envelope" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="E-mailiniz.."
              aria-label="E-mailiniz.."
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <div className="input-group mb-3 px-5">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-key" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Şifre Belirleyiniz.."
              aria-label="Şifre Belirleyiniz.."
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <div className="input-group mb-3 px-5">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-key" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Şifrenizi Tekrar Giriniz.."
              aria-label="Şifrenizi Tekrar Giriniz.."
              aria-describedby="basic-addon1"
              required
            />
          </div>

          <div className="buton d-flex  justify-content-center px-5">
            <input className="submit " type="submit" value="Sıfırla" />
            <input className="submit " type="submit" value="Kayıt Ol" />
          </div>
        </form>
      </div>

      {/*login body end*/}

      {/*login bottom end*/}
    </>
  );
};
export default SignUp;
