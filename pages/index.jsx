import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { motion } from 'framer-motion';
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
import HomeIllustration from '../components/HomeIllustration';

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
  sectionBg: {
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  brandBg: {
    backgroundImage: 'url(/network.jpg)',
    filter: `blur(${theme.spacing(0.5)}px)`
  }
});

const useStyles = makeStyles(style);
const completeAssetManagementItems = [
  'Upload',
  'Store',
  'Organise',
  'Manage',
  'Find',
  'Distribute',
  'Protect',
  'Promote',
];

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <motion.div
        variants={fadeTransition(0.4)}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div>
          <PageHero title="Advanced Digital Asset and Brand Management Software" image="/network.jpg"/>
          <div className={classes.backgroundPrimary} style={{ position: 'relative' }}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
              >
                <div className={classes.padded}>
                  <VideoPreview preview="/videopreview.jpg" />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                className={clsx(classes.splitSectionText, classes.padded, classes.flex)}
              >
                <div>
                  <Typography variant="h5" gutterBottom>
                    Share and promote your digital assets with mediabox
                  </Typography>
                  <br/>
                  <Typography component="p" variant="body1" paragraph>
                    MediaBox is a cloud-based product offering a centralised asset management system and an integrated suite of software solutions to manage and manipulate your media assets efficiently.
                  </Typography>
                  <Typography component="p" variant="body1">
                    Allowing collaboration with clients and colleagues all over the world, from one centralised management tool.
                  </Typography>
                </div>
              </Grid>
            </Grid>
            {/*<SectionSeparator fill="#fafafa" height={150} variant="diagonalTop" />*/}
            {/*<SectionSeparator fill="#fafafa" height={150} variant="diagonalBottom" bottom />*/}
          </div>

          <div className={clsx(classes.padded, classes.flex)} style={{paddingTop: 120, paddingBottom: 180, position: 'relative', backgroundColor: '#1c97c3', color: 'white', flexDirection: 'column'}}>
            <SectionIcon color="#fff" icon={<Globe />} gutterBottom />
            <Typography variant="h4" gutterBottom style={{maxWidth: 800, textAlign: 'center', marginBottom: 24}}>
              MediaBox automates marketing’s creative, acquisition, execution and fulfilment processes.
            </Typography>
            <Typography paragraph variant="body1" style={{maxWidth: 600, textAlign: 'center'}}>
              Enabling corporate marketing departments to ingest, create, store, edit, and fulfil demands for marketing assets globally.
            </Typography>
            <SectionSeparator fill="#ffffff" height={150} variant="diagonalBottom" bottom />
          </div>

          <div>
            <Grid container className={clsx(classes.padded, classes.splitSectionText, classes.noTopPadding)}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                className={classes.flex}
              >
                <div>
                  <SectionIcon
                    color={theme.palette.getContrastText(theme.palette.primary.main)}
                    icon={<SiteMap />}
                    gutterBottom
                  />
                  <Typography variant="h3">
                    Complete Asset Management
                  </Typography>
                  <br/>
                  <Typography component="p" variant="h5" paragraph>
                    The All-in-One Digital Asset Management Solution
                  </Typography>
                  <List>
                    {
                      completeAssetManagementItems.map(item => (
                        <ListItem key={item} className={classes.listItem}>
                          <ListItemIcon classes={{ root: classes.smallerIcon }}>
                            <KeyboardArrowRight />
                          </ListItemIcon>
                          <ListItemText primary={item} classes={{ root: classes.smallerItem }} />
                        </ListItem>
                      ))
                    }
                  </List>
                  <div className={classes.verticalPadding}>
                    <Typography component="p" variant="subtitle1" paragraph>
                      All your digital assets in one place, with secure access anytime, anywhere, worldwide.
                    </Typography>
                  </div>
                  <Button variant="contained" color="secondary" size="large">
                    Find Out More
                  </Button>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
              >
                <div>
                  <HomeIllustration />
                </div>
              </Grid>
            </Grid>
          </div>

          <div style={{position: 'relative', overflow: 'hidden'}}>
            <div className={clsx(classes.sectionBg, classes.brandBg)} />
            <SectionSeparator fill="#ffffff" height={150} variant="diagonalTop" />
            <div
              className={clsx(classes.padded, classes.flex)}
              style={{textAlign: 'center',paddingTop: theme.spacing(30), paddingBottom: theme.spacing(30), position: 'relative', backgroundColor: 'rgba(28, 151, 195, 0.9)', color: 'white', flexDirection: 'column'}}
            >
              <Typography variant="h2">
                Brand Management
              </Typography>
              <Typography variant="h6" gutterBottom>
                the all-in-one solution to manage & distribute content
              </Typography>
              <Button variant="contained" color="primary" size="large" style={{marginTop: theme.spacing(3)}}>
                Learn More
              </Button>
            </div>
            <SectionSeparator fill="#fafafa" height={150} variant="diagonalBottom" bottom/>
          </div>

          <div style={{position: 'relative'}}>
            <Container component="div">
              <div
                className={clsx(classes.padded, classes.flex)}
                style={{paddingTop: theme.spacing(12), paddingBottom: theme.spacing(12), position: 'relative', flexDirection: 'column'}}
              >
                <Typography variant="h3" component="h2" style={{textAlign: 'center'}} gutterBottom>
                  START CENTRALISING, SHARING & PROMOTING YOUR ASSETS NOW
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  the all-in-one solution to manage & distribute content
                </Typography>

                <Grid
                  container
                  spacing={3}
                  style={{paddingTop: theme.spacing(6), paddingBottom: theme.spacing(6)}}
                >
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Paper style={{padding: theme.spacing(6)}}>
                      <Typography variant="h4">
                        Watch our demo
                      </Typography>
                      <Button variant="contained" color="primary" size="large" style={{marginTop: theme.spacing(3)}}>
                        Learn More
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Paper style={{padding: theme.spacing(6)}}>
                      <Typography variant="h4">
                        Book a live demo
                      </Typography>
                      <Button variant="contained" color="primary" size="large" style={{marginTop: theme.spacing(3)}}>
                        Learn More
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Paper style={{padding: theme.spacing(6)}}>
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
        </div>

      </motion.div>
    </React.Fragment>
  )
}

Home.propTypes = {
  classes: PropTypes.object,
};

export default Home;
