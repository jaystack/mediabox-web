import React from 'react';
import * as PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles';
import {GlobeCanvas} from './GlobeCanvas';

import Typography from '@material-ui/core/Typography';
import {fade} from '@material-ui/core';
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

function HomePageHeader() {
  const classes = useStyles();
  return (
    <Hero title="Advanced Digital Asset and Brand Management Software">
      <div className={classes.scrollDown}>
        <ScrollIcon/>
      </div>
    </Hero>
  )
}

export default HomePageHeader;
