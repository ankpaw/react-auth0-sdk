import React from "react";
import LoginButton from "../../shared/header/loginButton/loginButton";
class Login extends React.Component {
  render() {
    return (
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">We are Boring</h1>
          <p className="lead font-weight-normal">
            This website is a front for illicit activities on the dark web.
          </p>
          <LoginButton></LoginButton>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    );
  }
}

export default Login;
