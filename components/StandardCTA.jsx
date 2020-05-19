import React from 'react';
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  padded: {
    padding: theme.spacing(5),
    [theme.breakpoints.only('lg')]: {
      padding: theme.spacing(10),
    },
    [theme.breakpoints.only('xl')]: {
      padding: theme.spacing(15),
    },
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreRoundedCard: {
    borderRadius: theme.spacing(1.5),
    boxShadow: `
      0 ${theme.spacing(1)}px ${theme.spacing(1)}px -${theme.spacing(.5)}px rgba(0, 0, 0, 0.05),
      0 ${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(.25)}px rgba(0,0,0,0.05),
      0 ${theme.spacing(1)}px ${theme.spacing(3)}px ${theme.spacing(.5)}px rgba(0,0,0,0.06)
    `,
    '& h4': {
      fontWeight: 900,
    }
  },
  whiteCard: {
    backgroundImage: 'url(/bg-page-section.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    color: theme.palette.secondary.main,
  },
  blueCard: {
    background: theme.palette.secondary.main,
    color: '#fff',
  },
  darkCard: {
    background: theme.palette.primary.main,
    color: '#fff',
  }
}));

function StandardCTA() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div style={{position: 'relative'}}>
      <Container component="div">
        <div
          className={clsx(classes.padded, classes.flex)}
          style={{
            paddingTop: theme.spacing(12),
            paddingBottom: theme.spacing(12),
            position: 'relative',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h3" component="h2" style={{textAlign: 'center', fontWeight: 600}} gutterBottom>
            START CENTRALISING, SHARING & PROMOTING YOUR ASSETS NOW
          </Typography>
          <Typography variant="h6" gutterBottom style={{textAlign: 'center'}}>
            Protecting your brand, globally, from one centralised resource.
          </Typography>

          <Grid
            container
            spacing={3}
            justify="center"
            style={{paddingTop: theme.spacing(6), paddingBottom: theme.spacing(6)}}
          >
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Paper
                className={clsx(classes.darkCard, classes.moreRoundedCard)}
                style={{padding: theme.spacing(6)}}
              >
                <Typography variant="h4">
                  Watch our demo
                </Typography>
                <Button variant="contained" color="secondary" size="large" style={{marginTop: theme.spacing(3)}}>
                  Learn More
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Paper
                className={clsx(classes.whiteCard, classes.moreRoundedCard)}
                style={{padding: theme.spacing(6)}}
              >
                <Typography variant="h4">
                  Book a live demo
                </Typography>
                <Button variant="contained" color="secondary" size="large" style={{marginTop: theme.spacing(3)}}>
                  Learn More
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Paper
                className={clsx(classes.blueCard, classes.moreRoundedCard)}
                style={{padding: theme.spacing(6)}}
              >
                <Typography variant="h4">
                  Speak to the team
                </Typography>
                <Button variant="contained" color="primary" size="large" style={{marginTop: theme.spacing(3)}}>
                  Learn More
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default StandardCTA;
