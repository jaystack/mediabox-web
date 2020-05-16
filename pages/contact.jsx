import React from 'react';
import * as PropTypes from 'prop-types';
import Head from 'next/head';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {fadeTransition} from '../lib/transitions';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Globe from '@material-ui/icons/Public';
import SiteMap from '@material-ui/icons/AccountTree';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import PageHero from '../components/PageHero';
import SectionSeparator from '../components/SectionSeparator';
import VideoPreview from '../components/VideoPreview';
import SectionIcon from '../components/SectionIcon';
import useTheme from '@material-ui/core/styles/useTheme';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';

const Map = dynamic(() => import('../components/Map'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

const style = theme => ({
  padding: {
    padding: theme.spacing(3),
  },
  categoryPickerOffset: {
    marginTop: theme.spacing(3),
  },
  splitSectionText: {
    background: '#fff',
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
  noTopPadding: {
    paddingTop: 0,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundPrimary: {
    background: theme.palette.primary.main,
  },
  smallerIcon: {
    minWidth: theme.spacing(5),
  },
  smallerItem: {
    marginTop:0,
    marginBottom:0,
  },
  verticalPadding: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  responsive: {
    maxWidth: '100%',
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  mapGrid: {
    position: 'relative',
    minHeight: theme.spacing(50)
  },
  mapContainer: {
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});

const useStyles = makeStyles(style);

function Contact() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <React.Fragment>
      <Head>
        <title>Contact</title>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <motion.div
        variants={fadeTransition(0.4)}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div>
          <PageHero title="Contact Us" image="/contact.jpg" />
          <div style={{ position: 'relative' }}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
              >
                <Toolbar />
                <div className={classes.padded}>
                  <div style={{paddingBottom: theme.spacing(3)}}>
                    <Typography variant="h4" component="h1" gutterBottom>
                      HAVE A QUESTION?
                    </Typography>
                    <Typography variant="h6" component="h3" gutterBottom>
                      The MediaBox team would be happy to help
                    </Typography>
                    <div style={{
                      paddingTop: theme.spacing(3),
                      paddingBottom: theme.spacing(3),
                    }}>
                      <Typography variant="subtitle1" component="p">
                        <strong>Live Chat</strong>
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        <strong>Telephone:</strong> 0203 7459067
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        <strong>Email:</strong> info@mediaboxsolutions.co.uk
                      </Typography>
                    </div>
                    <div style={{
                      paddingBottom: theme.spacing(3),
                    }}>
                      <Typography variant="subtitle1" component="p">
                        <strong>Address</strong>
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        20-22 Wenlock Road
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        London
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        N1 7GU
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <Typography variant="h4" component="h2" gutterBottom>
                      TECHNICAL SUPPORT
                    </Typography>
                    <div style={{
                      paddingTop: theme.spacing(3),
                      paddingBottom: theme.spacing(3),
                    }}>
                      <Typography variant="subtitle1" component="p">
                        <strong>Email:</strong> support@mediaboxsolutions.co.uk
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        <strong>Live Chat</strong> (please quote your user number)
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                className={clsx(classes.backgroundPrimary, classes.padded, classes.flex, classes.mapGrid)}
              >
                <Toolbar />
                <div className={classes.mapContainer}>
                  <Map />
                </div>
              </Grid>
            </Grid>
            {/*<SectionSeparator fill="#fafafa" height={150} variant="diagonalTop" />*/}
            {/*<SectionSeparator fill="#fafafa" height={150} variant="diagonalBottom" bottom />*/}
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  )
}

Contact.propTypes = {
  classes: PropTypes.object,
};

export default Contact;
