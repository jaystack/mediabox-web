import React from 'react';
import * as PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles';

import ScrollIcon from './ScrollIcon';
import Hero from './Hero';

const useStyles = makeStyles(theme => ({
  scrollDown: {
    position: 'absolute',
    bottom: theme.spacing(4),
    left: 0,
    right: 0,
    textAlign: 'center',
  }
}));

function PageHero({ title, image }) {
  const classes = useStyles();
  const hero = React.useRef(null);
  const handleScrollDown = e => {
    e.preventDefault();
    const y = hero.current.clientHeight;
    // console.log(y);
    window.scrollTo({
      top: y,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div ref={hero}>
      <Hero title={title} image={image}>
        <div className={classes.scrollDown}>
          <ScrollIcon onClick={handleScrollDown}/>
        </div>
      </Hero>
    </div>
  )
}

PageHero.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default PageHero;
