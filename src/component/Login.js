import React, { useState } from "react";
import usernameimage from "../assets/img/user-name-image.png";
import passwordimage from "../assets/img/password-image.png";
import loginarrowimg from "../assets/img/login-arrow-image.png";
import backgroundimage from "../assets/img/background-image.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Wrong Combination");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    const pattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).+$/;
    const valid = pattern.test(event.target.value);
    if (!valid) {
      setErrorMessage("Wrong Combination");
    } else {
      setErrorMessage("Right Combination");
    }
  };
  const handleLogin = () => {
    const validUsername = "test@luxpmsoft.com";
    const validPassword = "test1234!";

    if (username === validUsername && password === validPassword) {
      setIsLoggedIn(true);
    } else {
      alert("The password is wrong");
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Successfully logged in</h1>
      </div>
    );
  }

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="container">
        <div className="login-form">
          <div className="login-arrow-icon-img-container">
            <img src={loginarrowimg} alt="login-icon" />
          </div>
          <div className="textbox-container">
            <input
              type="text"
              className="text-box"
              placeholder="USERNAME"
              value={username}
              onChange={handleUsernameChange}
            />
            <img
              src={usernameimage}
              alt="user-name-img"
              className="login-input-icon"
            />
          </div>
          <div>
            <div className="textbox-container">
              <input
                type="text"
                className="text-box"
                placeholder="PASSWORD"
                value={password}
                onChange={handlePasswordChange}
              />
              <img
                src={passwordimage}
                alt="password-img"
                className="login-input-icon"
              />
            </div>
            <p className="error-message">* {errorMessage}</p>
          </div>

          <div>
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
            <span className="forget-password">Forgot password?</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
