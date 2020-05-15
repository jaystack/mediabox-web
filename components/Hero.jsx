import React from 'react';
import * as PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles';
import {GlobeCanvas} from './GlobeCanvas';

import Typography from '@material-ui/core/Typography';
import {fade} from '@material-ui/core';
import ScrollIcon from './ScrollIcon';
import {motion, useTransform, useViewportScroll} from 'framer-motion';

const useStyles = makeStyles(theme => ({
  hero: {
    minHeight: '60vh',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBackground: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundImage: 'url(/network.jpg)',
    backgroundPosition: 'center center',
    willChange: 'transform',
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

function Hero({ title, children, image }) {
  const classes = useStyles();
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, value => value / 3);
  const backgroundImage = `url(${image})`;

  return (
    <div className={classes.hero}>
      <motion.div className={classes.heroBackground} style={{ y, backgroundImage }} extraThing="hello" />
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
  image: PropTypes.string,
};

export default Hero;
