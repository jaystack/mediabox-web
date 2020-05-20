import React from 'react';
import * as PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import SectionSeparator from './SectionSeparator';
import useTheme from '@material-ui/core/styles/useTheme';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  padded: {
    padding: theme.spacing(5),
    [theme.breakpoints.only('lg')]: {
      padding: theme.spacing(10),
    },
    [theme.breakpoints.only('xl')]: {
      padding: theme.spacing(15),
    },
  },
  sectionBg: {
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  topSeparator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  bottomSeparator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

function SectionFrame({
  backgroundColor,
  backgroundImage,
  backgroundOpacity,
  topSeparator,
  bottomSeparator,
  children,
}) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div
      className={clsx(classes.padded, classes.root)}
      style={{
        backgroundColor,
        color: theme.palette.getContrastText(backgroundColor)
      }}
    >
      {
        backgroundImage && (
          <div
            className={clsx(classes.sectionBg)}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              opacity: backgroundOpacity || .125
            }}
          />
        )
      }
      {
        topSeparator && (
          <div className={classes.topSeparator}>
            <SectionSeparator
              fill={topSeparator}
              height={theme.spacing(10)}
              variant="diagonalTop"
            />
          </div>
        )
      }
      {
        bottomSeparator && (
          <div className={classes.bottomSeparator}>
            <SectionSeparator
              fill={bottomSeparator}
              height={theme.spacing(10)}
              variant="diagonalBottom"
              bottom
            />
          </div>
        )
      }
      <div style={{
        position: 'relative',
        paddingTop: topSeparator ? theme.spacing(10) : 0,
        paddingBottom: bottomSeparator ? theme.spacing(10) : 0,
      }}>
        { children }
      </div>
    </div>
  )
}

SectionFrame.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundOpacity: PropTypes.number,
  topSeparator: PropTypes.string,
  bottomSeparator: PropTypes.string,
  children: PropTypes.node,
};

SectionFrame.defaultProps = {
  backgroundColor: '#fafafa',
};

export default SectionFrame;
