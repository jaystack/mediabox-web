import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  container: {
    border: 0,
    overflow: 'visible',
    textAlign: 'center',
    opacity: 1,
    height: 'auto',
    bottom: 13,
    animation: `$nudgeMouse 2.4s cubic-bezier(0.250,0.460,0.450,0.940) infinite`,
    '&:hover': {
      '& $gesture': {
        animation: '$mouseScrollIn .55s cubic-bezier(.5,.1,.07,1) forwards',
      },
      '&:before': {
        backgroundColor: 'rgb(255,255,255)',
      }
    },
    '&:before': {
      position: 'absolute',
      content: '""',
      display: 'block',
      left: '50%',
      marginLeft: -1,
      top: theme.spacing(2),
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 2,
      height: 6,
      borderRadius: 10,
      transition: 'backgroundColor .55s cubic-bezier(.5,.1,.07,1)',
      animation: '$trackBallSlide 2.4s cubic-bezier(0.000,0.000,0.725,1.000) infinite'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '50%',
      display: 'block',
      width: theme.spacing(2.5),
      height: theme.spacing(3.75),
      marginLeft: -theme.spacing(1.25),
      border: '2px solid rgba(255,255,255,0.5)',
      borderRadius: theme.spacing(2.5),
      boxSizing: 'border-box',
      zIndex: 62,
    }
  },
  icon: {
    width: theme.spacing(2.5),
    height: theme.spacing(3.75),
    textAlign: 'center',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 100,
  },
  gesture: {
    fill: 'transparent',
    strokeWidth: 2,
    strokeDashoffset: 120,
    strokeDasharray: 120,
    animation: '$mouseScrollOut .55s cubic-bezier(.5,.1,.07,1) forwards',
  },
  "@keyframes trackBallSlide": {
    "0%": {
      opacity: 1,
      transform: `scaleY(1) translateY(${-theme.spacing(1)}px)`,
    },
    '45%': {
      opacity: 0,
      transform: `scaleY(0.5) translateY(${theme.spacing(1)}px)`,
    },
    '46%': {
      opacity: 0,
      transform: `scaleY(1) translateY(${-theme.spacing(1)}px)`,
    },
    "65%, 100%": {
      opacity: 1,
      transform: `scaleY(1) translateY(${-theme.spacing(1)}px)`,
    }
  },
  "@keyframes nudgeMouse": {
    "0%": {
      transform: 'translateY(0)'
    },
    '45%': {
      transform: `translateY(${theme.spacing(1)})`
    },
    "65%, 100%": {
      transform: 'translateY(0)',
    }
  },
  '@keyframes mouseScrollIn': {
    '0%': { strokeDashoffset: 120 },
    '100%': { strokeDashoffset: 0 },
  },
  '@keyframes mouseScrollOut': {
    '0%': { strokeDashoffset: 0 },
    '100%': { strokeDashoffset: 120 },
  },
}));

function ScrollIcon() {
  const classes = useStyles();
  return (
    <a href="#" className={classes.container}>
      <svg className={classes.icon} viewBox="0 0 30 45" enableBackground="new 0 0 30 45">
        <path
          className={classes.gesture}
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeMiterlimit="10"
          d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"
        />
      </svg>
    </a>
  )
}

export default ScrollIcon;
