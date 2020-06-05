import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Link from "next/link";

import "./Button.scss";

const Button = ({ text, url, variant }) => (
  <div
    className={classnames("button", variant?.length ? variant : "-buttonMd")}
  >
    <Link href={url}>
      <a className="button__link">
        {text}
      </a>
    </Link>
  </div>
);

Button.defaultProps = {
  text: "",
  url: "",
  variant: [],
};

Button.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  variant: PropTypes.array,
};

export default Button;
