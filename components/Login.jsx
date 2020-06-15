import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Button from "../components/Button";

import "./Login.scss";

const Login = ({ variant, image, lostPasswordUrl, lostPasswordText }) => (
  <div className={classnames("login", variant)}>
    {image && (
      <div className="login__background">
        <img
          className="login__loginBackgroundImage"
          src={image.src}
          alt={image.alt}
        />
      </div>
    )}
    <div className="login__formContainer">
      <form
        name="login"
        className="login__form"
        onSubmit={() => {
          window.alert("submit");
        }}
      >
        {/* TODO: Validation */}
        {false && (
          <section className="login__section">
            <ul class="login__errors">
              <li class="login__error">
                <strong>Error</strong>: the username field is empty.
              </li>
              <li class="login__error">
                <strong>Error</strong>: the password field is empty.
              </li>
            </ul>
          </section>
        )}
        <section className="login__section">
          <label className="login__label" for="user_login">
            Username or Email Address
          </label>
          <input
            className="login__input"
            name="log"
            type="text"
            id="user_login"
          />
        </section>
        <section className="login__section">
          <label className="login__label" for="user_pass">
            Password
          </label>
          <input
            className="login__input"
            name="pwd"
            type="password"
            id="user_pass"
          />
        </section>
        <section className="login__section">
          <input
            name="rememberme"
            type="checkbox"
            value="forever"
            id="rememberme"
            className="login__checkbox"
          />
          <label className="login__checkboxLabel" for="rememberme">
            Remember Me
          </label>
        </section>
        <div className="login__section">
          <Button variant={["-buttonMd", "-buttonDark"]}>
            <input
              name="submit"
              type="submit"
              value="Log In"
              className="login__submitButton"
            />
          </Button>
        </div>
        <ul>
          {lostPasswordUrl && (
            <li className="login__link">
              <a href={"https://godev.co.uk/lostpassword/"}>
                {lostPasswordText}
              </a>
            </li>
          )}
        </ul>
      </form>
    </div>
  </div>
);

Login.defaultProps = {
  variant: [],
  image: {
    src: "",
    alt: "",
  },
  lostPasswordUrl: "",
  lostPasswordText: "",
};

Login.propTypes = {
  variant: PropTypes.array,
  image: PropTypes.objectOf(PropTypes.string),
  lostPasswordUrl: PropTypes.string,
  lostPasswordText: PropTypes.string,
};

export default Login;
