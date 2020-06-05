import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Link from "next/link";

import "./Button.scss";

const Button = ({ text, href, variant }) => (
  <div
    className={classnames("button", variant?.length ? variant : "-buttonMd")}
  >
    <Link href="contact">
      <a href={href} className="button__link">
        {text}
      </a>
    </Link>
  </div>
);

Button.defaultProps = {
  text: "",
  href: "",
  variant: [],
};

Button.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.array,
};

export default Button;
