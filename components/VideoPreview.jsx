import React from 'react';
import * as PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

import IconButton from '@material-ui/core/IconButton';

import Play from '@material-ui/icons/PlayArrow'

const useStyles = makeStyles(theme => ({
  videoPreview: {
    display: 'block',
    position: 'relative',
    backgroundSize: 'cover',
    borderRadius: theme.spacing(1),
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    }
  },
  overlay: {
    top:0,
    left:0,
    right:0,
    bottom:0,
    position:'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:before': {
      content: '""',
      position:'absolute',
      width: 50,
      height: 50,
      left: '50%',
      top: '50%',
      border: '1px solid rgba(255,255,255,.5)',
      borderRadius: '50%',
      transform: 'scale(.35) translateY(-50%) translateX(-50%)',
      animation: '$pulse 2.6s cubic-bezier(.25,.9,.2,1) .4s infinite'
    }
  },
  button: {
    background: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      background: theme.palette.primary.main,
    }
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'translate3d(-50%,-50%,0) scale(.9)',
      opacity:1
    },
    '100%': {
      transform: 'translate3d(-50%,-50%,0) scale(1.7)',
      opacity:0
    },
  }
}));

function VideoPreview({ preview }) {
  const classes = useStyles();
  return (
    <div className={classes.relative}>
      <div
        className={classes.videoPreview}
        style={{backgroundImage: `url(${preview})`}}
      >
        <div className={classes.overlay}>
          <IconButton className={classes.button}>
            <Play />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default VideoPreview;
