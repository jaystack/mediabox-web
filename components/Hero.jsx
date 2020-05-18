import React from 'react';
import * as PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles';
import {GlobeCanvas} from './GlobeCanvas';

import Typography from '@material-ui/core/Typography';
import {fade} from '@material-ui/core';
import ScrollIcon from './ScrollIcon';
import {motion, useSpring, useTransform, useViewportScroll} from 'framer-motion';
import NoSsr from '@material-ui/core/NoSsr';
import {fadeTransition, standardInvertedTransition, standardTransition} from '../lib/transitions';

const useStyles = makeStyles(theme => ({
  hero: {
    minHeight: '60vh',
    position: 'relative',
    overflow: 'hidden',
    background: theme.palette.secondary.main,
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
    // flexDirection: 'column',
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
    fontWeight: 800,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '85%',
      fontSize: `${theme.spacing(4.5)}px`,
    }
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
}));

function Hero({ title, children, image }) {
  const classes = useStyles();
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, value => value / 3);
  const backgroundImage = `url(${image})`;
  const scrollYValue = useSpring(0, { damping: 10 });

  React.useEffect(() => {
    scrollYValue.onChange(v => window.screenTop = v);
    return () => scrollYValue.destroy();
  }, []);

  const scrollPastHero = e => scrollYValue.set(e.target.clientHeight);

  return (
    <div className={classes.hero}>
      <NoSsr>
        <motion.div
          key={classes.backgroundImage}
          variants={standardInvertedTransition}
          animate="enter"
          initial="initial"
          exit="exit"
          className={classes.heroBackground}
          style={{ y, backgroundImage }}
          extraThing="hello"
        />
      </NoSsr>
      <div className={classes.heroOverlay}>
        <motion.div
          className={classes.center}
          variants={standardTransition}
          animate="enter"
          initial="initial"
          exit="exit"
        >
          <Typography variant="h2" component="h1" className={classes.heroMainText}>
            { title }
          </Typography>
        </motion.div>
      </div>
      <div className={classes.scrollDown} onClick={scrollPastHero}>
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
