import React from 'react';
import * as PropTypes from 'prop-types';
import Head from 'next/head';
import {motion} from 'framer-motion';
import {makeStyles} from '@material-ui/core/styles';
import {fadeTransition} from '../lib/transitions';

import Typography from '@material-ui/core/Typography';
import PageHero from '../components/PageHero';
import useTheme from '@material-ui/core/styles/useTheme';

import Container from '@material-ui/core/Container';
import SectionSeparator from '../components/SectionSeparator';
import Button from '@material-ui/core/Button';
import {CubeCanvas} from '../components/CubeCanvas';
import Grid from '@material-ui/core/Grid';

import FolderIcon from '@material-ui/icons/FolderOpen';
import CogsIcon from '@material-ui/icons/Settings';
import Headset from '@material-ui/icons/Headset';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import VideoPreview from '../components/VideoPreview';
import clsx from 'clsx';
import SectionIcon from '../components/SectionIcon';
import SiteMap from '@material-ui/core/SvgIcon/SvgIcon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Divider from '@material-ui/core/Divider';
import {fade, useMediaQuery} from '@material-ui/core';
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
    marginTop: 0,
    marginBottom: 0,
    '& span': {
      fontSize: theme.spacing(2.25),
    },
  },
  verticalPadding: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  verticalPaddingLarge: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  responsive: {
    maxWidth: '100%',
  },
  listItem: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: 0,
    paddingRight: 0,
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
    backgroundImage: 'url(/brandNeverSleeps.jpg)',
    // filter: `blur(${theme.spacing(0.5)}px)`
  },
  grow: {
    flexGrow: 1,
  },
  flexColumn: {
    flexDirection: 'column',
  },
  heading: {
    fontSize: theme.spacing(2.75),
    fontWeight: theme.typography.fontWeightLight,
  },
  whiteBackground: {
    backgroundColor: theme.palette.background.paper,
  },
  darkBackground: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  blueBackground: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  darkItemIcons: {
    color: theme.palette.background.paper,
  }
});

const items = [
  'One Tool',
  'One Resource',
  'Complete Control',
];

const speedItems = [
  'Super-fast upload and download speeds',
  'Advanced metadata for search and share',
  'Global distribution',
  'Share or embed in a single click',
  'Multi-language available',
];

const platformItems = [
  'Tailored layout/styling in your Hub',
  'Branded URL',
  'Branded Watermarking',
];


const useStyles = makeStyles(style);

function Brand() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <React.Fragment>
      <Head>
        <title>Brand Management</title>
      </Head>
      <PageHero title="Brand Experience" image="/brand.jpg"/>
      <motion.div
        variants={fadeTransition(0.4)}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className={clsx(classes.darkBackground, classes.flex)}
            >
              <div className={classes.padded}>
                <Typography variant="h4" gutterBottom>
                  Delivering a Consistent Brand Experience
                </Typography>
                <br/>
                <Typography component="p" variant="body1" paragraph>
                  The more successful the company and its marketing organisation is in presenting a consistent, compelling, informative brand, the greater the likelihood of sales success. The equation is simple; enforcing it is not.
                </Typography>
                <Typography component="p" variant="body1" paragraph>
                  Mobilising your brand with MediaBox will increase sales and marketing opportunities because without rigourous standards and controls, a company’s brand can be diluted, leading to customer confusion and lost business. As a result, most companies implement rigid, highly manual and centralised marketing practices
                </Typography>
                <Typography component="p" variant="body1" paragraph>
                  Marketing Automation (MAM) can steward the brand control process, whilst also empower the end users (corporate, networks, and field marketers, agencies) who are ultimately responsible for facilitating the brand’s regional and worldwide product sales and promotions.
                </Typography>
              </div>
              {/*<Divider />*/}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
            >
              <div className={clsx(classes.padded, classes.blueBackground)}>
                <img src="/multimedia.png" className={classes.responsive} />
              </div>
              {/*<Divider />*/}
            </Grid>
          </Grid>




          <div style={{position: 'relative', margin: '0 auto'}} className={classes.padded}>
            <Container>
              <div style={{paddingTop: theme.spacing(2), paddingBottom: theme.spacing(2)}}>
                <div className={classes.verticalPaddingLarge}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} sm={12} md={6}>
                      <SectionIcon
                        color={theme.palette.getContrastText(theme.palette.background.default)}
                        icon={<CogsIcon />}
                        gutterBottom
                      />
                      <Typography variant="h3" gutterBottom style={{fontWeight: 900}}>
                        Brand Management
                      </Typography>
                      <Typography component="p" variant="body1">
                        MediaBox delivers full control and management over the lifecycle of your digital assets, from creation to archive.
                      </Typography>
                      <Typography component="p" variant="h6" className={classes.verticalPadding} style={{ opacity: .75, fontWeight: 400 }}>
                        Turbocharge how your team operates.
                      </Typography>
                      <List>
                        {
                          items.map(item => (
                            <ListItem key={item} className={classes.listItem}>
                              <ListItemIcon classes={{root: classes.smallerIcon}}>
                                <KeyboardArrowRight />
                              </ListItemIcon>
                              <ListItemText primary={item} classes={{root: classes.smallerItem}} />
                            </ListItem>
                          ))
                        }
                      </List>
                      <Typography component="p" variant="body1" paragraph className={classes.verticalPadding}>
                        Our unique asset management software caters for video, images, documentation and multimedia whilst allowing for intuitive file organisation alongside a detailed search functionality.
                      </Typography>
                      <Button variant="contained" color="secondary" size="large">
                        Speak to Us
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <HomeIllustration />
                    </Grid>
                  </Grid>
                </div>

              </div>
            </Container>
            {/*<SectionSeparator fill="#fafafa" height={150} variant="diagonalTop" />*/}
            {/*<SectionSeparator fill="#fafafa" height={150} variant="diagonalBottom" bottom />*/}
          </div>


          <div style={{position: 'relative', overflow: 'hidden'}}>
            <div className={clsx(classes.sectionBg, classes.brandBg)} />
            <SectionSeparator fill="#fafafa" height={150} variant="diagonalTop"/>
            <div
              className={clsx(classes.padded, classes.flex)}
              style={{
                textAlign: 'left',
                paddingTop: theme.spacing(30),
                paddingBottom: theme.spacing(30),
                position: 'relative',
                backgroundColor: fade(theme.palette.primary.main, 0.9),
                color: 'white',
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h3"
                          style={{lineHeight: .875, marginBottom: theme.spacing(2), fontWeight: 600}}>
                Brands Never Sleep
              </Typography>
              <div style={{maxWidth: theme.spacing(72)}} className={classes.verticalPadding}>
                <Typography component="p" variant="h6" paragraph style={{fontWeight: 400, marginBottom: theme.spacing(5)}}>
                  Brands never sleep, engaging audiences all around the world, and evolving daily to stay ahead of the game.
                </Typography>
                <Typography component="p" variant="h6" paragraph style={{fontWeight: 400, marginBottom: theme.spacing(5)}}>
                  The collation, management and distribution of brand assets is at the frontline of this hefty task, with endless numbers of parties requiring access to the right digital assets.  More importantly, they need these often gigabyte heavy assets, on demand and securely.
                </Typography>
                <Typography component="p" variant="h6" paragraph style={{fontWeight: 400, marginBottom: theme.spacing(5)}}>
                  Internal Marketing, marketing agencies, brand associates, agents, social media influencers, press, PR and social departments, sponsors…. the list goes on.
                </Typography>
                <Typography variant="h5" gutterBottom style={{marginBottom: theme.spacing(3)}}>
                  Take back control of your  brand’s digital assets with MediaBox.
                </Typography>
              </div>
            </div>
            <SectionSeparator fill="#fff" height={150} variant="diagonalBottom" bottom/>
          </div>

          <div style={{position: 'relative', margin: '0 auto'}} className={clsx(classes.padded, classes.whiteBackground)}>
            <Container>
              <div style={{paddingTop: theme.spacing(2), paddingBottom: theme.spacing(17)}}>
                <div className={classes.verticalPaddingLarge}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} sm={12} md={6}>
                      <SectionIcon
                        color={theme.palette.getContrastText(theme.palette.background.default)}
                        icon={<CogsIcon />}
                        gutterBottom
                      />
                      <Typography variant="h3" gutterBottom style={{fontWeight: 900}}>
                        Speed is of the Essence
                      </Typography>
                      <Typography component="p" variant="body1">
                        Slow and steady doesn’t always win the race.
                      </Typography>
                      <Typography component="p" variant="h6" className={classes.verticalPadding} style={{ opacity: .75, fontWeight: 400 }}>
                        Deliver on time with the click of a button.
                      </Typography>
                      <Typography component="p" variant="body1" paragraph className={classes.verticalPadding}>
                        Make sure the right brand images and messages are in the right place at the right time – every time.
                      </Typography>
                      <List>
                        {
                          speedItems.map(item => (
                            <ListItem key={item} className={classes.listItem}>
                              <ListItemIcon classes={{root: classes.smallerIcon}}>
                                <KeyboardArrowRight />
                              </ListItemIcon>
                              <ListItemText primary={item} classes={{root: classes.smallerItem}} />
                            </ListItem>
                          ))
                        }
                      </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} container justify="center">
                      <img src="/speed.jpg" className={classes.responsive} />
                    </Grid>
                  </Grid>
                </div>

              </div>
            </Container>
            {/*<SectionSeparator fill="#fafafa" height={150} variant="diagonalTop" />*/}
            <SectionSeparator fill={theme.palette.primary.main} height={theme.spacing(15)} variant="diagonalBottom" bottom />
          </div>


          <div style={{position: 'relative', margin: '0 auto'}} className={clsx(classes.padded, classes.darkBackground)}>
            <Container>
              <div style={{paddingTop: theme.spacing(2), paddingBottom: theme.spacing(2)}}>
                <div className={classes.verticalPaddingLarge}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} sm={12} md={6}>
                      <SectionIcon
                        color="inherit"
                        icon={<CogsIcon />}
                        gutterBottom
                      />
                      <Typography variant="h3" gutterBottom style={{fontWeight: 900}}>
                        Your Platform, Your Brand
                      </Typography>
                      <Typography component="p" variant="body1" paragraph>
                        Brand consistency is key, that’s why with MediaBox, your brand is at the forefront.
                      </Typography>
                      <Typography component="p" variant="body1">
                        You get:
                      </Typography>
                      <List>
                        {
                          platformItems.map(item => (
                            <ListItem key={item} className={classes.listItem}>
                              <ListItemIcon classes={{root: classes.smallerIcon}} className={classes.darkItemIcons}>
                                <KeyboardArrowRight color="inherit" />
                              </ListItemIcon>
                              <ListItemText primary={item} classes={{root: classes.smallerItem}} />
                            </ListItem>
                          ))
                        }
                      </List>
                      <Typography component="p" variant="body1" paragraph className={classes.verticalPadding}>
                        Our unique asset management software caters for video, images, documentation and multimedia whilst allowing for intuitive file organisation alongside a detailed search functionality.
                      </Typography>
                      <Button variant="contained" color="secondary" size="large">
                        Speak to Us
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} container justify="center">
                      <img src="/loginPreview.png" className={classes.responsive} />
                    </Grid>
                  </Grid>
                </div>

              </div>
            </Container>
            {/*<SectionSeparator fill="#fafafa" height={150} variant="diagonalTop" />*/}
            {/*<SectionSeparator fill="#fafafa" height={150} variant="diagonalBottom" bottom />*/}
          </div>

          {/*<div*/}
          {/*  className={classes.padded}*/}
          {/*  style={{position: 'relative', background: theme.palette.primary.main, color: '#fff'}}*/}
          {/*>*/}
          {/*  <div style={{position: 'absolute', top: 0, left: 0, right: 0}}>*/}
          {/*    <SectionSeparator fill="#fafafa" height={theme.spacing(15)} variant="diagonalTop"/>*/}
          {/*  </div>*/}
          {/*  <Container style={{position: 'relative', paddingTop: theme.spacing(15)}}>*/}
          {/*    <div className={clsx(classes.flex, { [classes.flexColumn]: isMobile })}>*/}
          {/*      <Typography*/}
          {/*        component="p"*/}
          {/*        variant="h3"*/}
          {/*        className={classes.grow}*/}
          {/*        style={{fontWeight: 700, textAlign: isMobile ? 'center' : 'left'}}*/}
          {/*      >*/}
          {/*        Got a question?*/}
          {/*      </Typography>*/}
          {/*      <div style={{ marginTop: isMobile ? theme.spacing(4) : 0}}>*/}
          {/*        <Button variant="contained" size="large" color="secondary" fullWidth={isMobile}>*/}
          {/*          Contact Us*/}
          {/*        </Button>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </Container>*/}
          {/*</div>*/}
        </div>
      </motion.div>
    </React.Fragment>
  )
}

Brand.propTypes = {
  classes: PropTypes.object,
};

export default Brand;
