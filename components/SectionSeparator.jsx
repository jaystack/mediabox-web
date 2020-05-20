import React from 'react';
import * as PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  separator: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 1,
  },
  shapeSeparator: {
    display: 'block',
    height: '100%',
    width: '100%',
  },
  bottomAlign: {
    bottom: -.05,
  }
}));

const getPath = variant => {
  switch (variant) {
    case 'diagonalBottom': return '104 10 0 0 0 10';
    case 'diagonalTop': return '104 0 0 0 104 10';
  }
};

function SectionSeparator({ height, fill, variant, bottom }) {
  const classes = useStyles();
  const path = getPath(variant);
  return (
    <div
      className={clsx(classes.separator, { [classes.bottomAlign]: bottom })}
      style={{ height, opacity: 1 }}
    >
      <svg
        className={classes.shapeSeparator}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <polygon points={path} />
      </svg>
    </div>
  )
}

SectionSeparator.propTypes = {
  variant: PropTypes.oneOf(['diagonalTop', 'diagonalBottom']),
  bottom: PropTypes.bool,
  fill: PropTypes.string,
  height: PropTypes.number,
};

export default SectionSeparator;
