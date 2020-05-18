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
import {useMediaQuery} from '@material-ui/core';

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
  mapGrid: {
    position: 'relative',
    minHeight: theme.spacing(50)
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
});

const items = [
  'Ingest in bulk',
  'Metadata tagging',
  'Sophisticated search capabilities',
];

const monitorItems = [
  'Access management ensuring download approval',
  'Permissions control',
  'Transparency',
  'Usage reports',
  'Automate watermarking for images',
];

const permissionsIcon = [
  'Secure downloads',
  'Permission controls',
  'Usage reports',
  'Your assets safely shared',
];

const useStyles = makeStyles(style);

function DigitalAssetManagement() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <React.Fragment>
      <Head>
        <title>Digital Asset Management</title>
      </Head>
      <PageHero title="Digital Asset Management" image="/digital.jpg"/>
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
                  Image, Video and Multimedia
                </Typography>
                <br/>
                <Typography component="p" variant="body1" paragraph>
                  Centralised cloud-based storage coupled with powerful metadata driven search tools mean you’ll never again be stuck searching for a critical asset.
                </Typography>
                <Typography component="p" variant="body1" paragraph>
                  Promote best practice and maximise your digital investments across multiple teams, sites and territories to amplify creative opportunities whilst maintaining asset integrity with top-down control.
                </Typography>
                <Typography component="p" variant="body1" paragraph>
                  Store, process, and playback all of your assets in any file type within MediaBox itself, meaning you won’t have to download every video you wish to preview.
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
              <div className={clsx(classes.padded)}>
                <img src="/multimedia.png" className={classes.responsive} />
              </div>
              {/*<Divider />*/}
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className={clsx(classes.blueBackground, classes.padded, classes.flex)}
            >
              <div>
                <Typography variant="h4" gutterBottom>
                  Document Management
                </Typography>
                <br/>
                <Typography component="p" variant="body1" paragraph>
                  Store instructions, copy, briefs, and proposals right alongside your multimedia assets. Never again dig for buried documents relating to your work, MediaBox stores all associated files with the images, videos, or audio to which they relate.
                </Typography>

                <Typography component="p" variant="body1" paragraph>
                  Make use of efficient, centralised storage to allow for the collaboration with colleagues and clients across the world.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
            >
              <div className={clsx(classes.padded, classes.whiteBackground)}>
                <img src="/documents.png" className={classes.responsive} />
              </div>
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
                        icon={<FolderIcon />}
                        gutterBottom
                      />
                      <Typography variant="h3" gutterBottom style={{fontWeight: 900}}>
                        Organise
                      </Typography>
                      <Typography component="p" variant="h6" paragraph className={classes.verticalPadding} style={{ opacity: .75, fontWeight: 400 }}>
                        Organise your digital assets with a clear and easy to follow folder structure built to suit your needs.
                      </Typography>
                      <Grid container>
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
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <CubeCanvas image="/images/maze.svg" />
                    </Grid>
                  </Grid>
                </div>


                <div className={classes.verticalPaddingLarge}>
                  <Grid container spacing={3} alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
                    <Grid item xs={12} sm={12} md={6}>
                      <CubeCanvas x={79} y={12} z={29} image="/images/monitorIcon.svg" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <SectionIcon
                        color={theme.palette.getContrastText(theme.palette.background.default)}
                        icon={<Headset />}
                        gutterBottom
                      />
                      <Typography variant="h3" gutterBottom style={{fontWeight: 900}}>
                        Manage and Monitor
                      </Typography>
                      <Typography component="p" variant="h6" className={classes.verticalPadding} style={{ opacity: .75, fontWeight: 400 }}>
                        Stay in control with granular permission settings and usage reports.
                      </Typography>
                      <Typography component="p" variant="h6" paragraph className={classes.verticalPadding} style={{ opacity: .75, fontWeight: 400 }}>
                        Easy setup of viewing permissions and asset downloads combined with clear usage reporting, ensures compliance whilst highlighting levels of ongoing activity.                    </Typography>
                      <Grid container>
                        <List>
                          {
                            monitorItems.map(item => (
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
                    </Grid>
                  </Grid>
                </div>


                <div className={classes.verticalPaddingLarge}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} sm={12} md={6}>
                      <SectionIcon
                        color={theme.palette.getContrastText(theme.palette.background.default)}
                        icon={<PermContactCalendarIcon />}
                        gutterBottom
                      />
                      <Typography variant="h3" gutterBottom style={{fontWeight: 900}}>
                        Permissions
                      </Typography>
                      <Typography component="p" variant="h6" className={classes.verticalPadding} style={{ opacity: .75, fontWeight: 400 }}>
                        Bespoke permissions and access controls gives you confidence in the knowledge that your colleagues, clients, or third party organisations, can only see the digital assets you want them to, and only the power to use them, the way you want them to.
                      </Typography>
                      <Grid container>
                        <List>
                          {
                            permissionsIcon.map(item => (
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
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <CubeCanvas x={129} y={64} z={2} image="/images/maze.svg" />
                    </Grid>
                  </Grid>
                </div>

              </div>
            </Container>
            {/*<SectionSeparator fill="#fafafa" height={150} variant="diagonalTop" />*/}
            {/*<SectionSeparator fill="#fafafa" height={150} variant="diagonalBottom" bottom />*/}
          </div>

          <div
            className={classes.padded}
            style={{position: 'relative', background: theme.palette.primary.main, color: '#fff'}}
          >
            <div style={{position: 'absolute', top: 0, left: 0, right: 0}}>
              <SectionSeparator fill="#fafafa" height={theme.spacing(15)} variant="diagonalTop"/>
            </div>
            <Container style={{position: 'relative', paddingTop: theme.spacing(15)}}>
              <div className={clsx(classes.flex, { [classes.flexColumn]: isMobile })}>
                <Typography
                  component="p"
                  variant="h3"
                  className={classes.grow}
                  style={{fontWeight: 700, textAlign: isMobile ? 'center' : 'left'}}
                >
                  Got a question?
                </Typography>
                <div style={{ marginTop: isMobile ? theme.spacing(4) : 0}}>
                  <Button variant="contained" size="large" color="secondary" fullWidth={isMobile}>
                    Contact Us
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  )
}

DigitalAssetManagement.propTypes = {
  classes: PropTypes.object,
};

export default DigitalAssetManagement;
