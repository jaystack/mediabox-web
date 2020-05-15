import React from 'react';
import * as PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles';
import {GlobeCanvas} from './GlobeCanvas';

import Typography from '@material-ui/core/Typography';
import {fade} from '@material-ui/core';
import ScrollIcon from './ScrollIcon';

const useStyles = makeStyles(theme => ({
  hero: {
    minHeight: '60vh',
    position: 'relative',
  },
  heroBackground: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    background: 'url(/network.jpg) center center',
  },
  heroOverlay: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    background: fade(theme.palette.secondary.main, 0.75),
  },
  heroMainText: {
    color: '#fff',
    maxWidth: '60%',
    textAlign: 'center',
  },
}));

function Hero({ title, children }) {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <div className={classes.heroBackground} />
      <div className={classes.heroOverlay}>
        <Typography variant="h2" component="h1" className={classes.heroMainText}>
          { title }
        </Typography>
      </div>
      <div className={classes.scrollDown}>
        { children }
      </div>
    </div>
  )
}

Hero.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};

export default Hero;
