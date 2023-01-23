import React, { useState } from "react";
import logo from "../assets/images/logo-title.svg";
import showcase from "../assets/images/showcase.svg";

const Welcome = () => {
  // const logo = "../assets/images/logo-title.svg";
  // const showcase = "../assets/images/showcase.svg";

  const [showPassword, setShowPassword] = useState(false);

  const toggleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="welcome">
      <div className="logo-showcase">
        <div>
          <img src={logo} alt="logo" className="logo" />
          <img src={showcase} alt="showcase" className="showcase" />
        </div>
      </div>

      <div className="form-details">
        <div className="form-heading">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
        </div>

        <form action="/dashboard">
          <div className="inputs">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />

            <div className="password-button">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                required
              />

              <button
                onClick={toggleShow}
                type="button"
                className="toggle-show"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <a href="#!" className="forgot-password">
            FORGOT PASSWORD
          </a>

          <button type="submit" className="login-button">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
