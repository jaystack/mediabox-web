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
  return (
    <Hero title={title} image={image}>
      <div className={classes.scrollDown}>
        <ScrollIcon/>
      </div>
    </Hero>
  )
}

PageHero.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default PageHero;
