import React from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";

import "./Heading.scss";

const Heading = ({ children, level, variant, className }) => (
  <>
    {level === 1 && <h1 className={classnames("heading", className, variant)}>{children}</h1>}
    {level === 2 && <h2 className={classnames("heading", className, variant)}>{children}</h2>}
    {level === 3 && <h3 className={classnames("heading", className, variant)}>{children}</h3>}
    {level === 4 && <h4 className={classnames("heading", className, variant)}>{children}</h4>}
    {level === 5 && <h5 className={classnames("heading", className, variant)}>{children}</h5>}
    {level === 6 && <h6 className={classnames("heading", className, variant)}>{children}</h6>}
  </>
);

Heading.defaultProps = {
  children: null,
  level: 2,
  variant: [],
  className: "",
};

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
  variant: PropTypes.array,
  className: PropTypes.string,
};

export default Heading;
