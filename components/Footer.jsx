import React from 'react';
import * as PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';

import './Footer.scss';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    background: '#fff',
    '& a': {
      color: theme.palette.getContrastText('#fff'),
    },
  },
  footerHeader: {
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.spacing(2),
    letterSpacing: theme.spacing(.25),
    color: theme.palette.secondary.main,
  },
  logo: {
    maxWidth: theme.spacing(20),
    marginBottom: theme.spacing(4),
  },
  linkListItem: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0
  },
  smallVerticalPadding: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  flex: {
    display: 'flex',
  },
  copyright: {
    background: theme.palette.primary.main,
    color: '#fff',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  copyrightText: {
    flexGrow: 1,
  },
  paddedMdAndDown: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: theme.spacing(4),
    }
  },
  noPadding: {
    padding: 0,
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.root}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={3} lg={3} className={classes.paddedMdAndDown}>
              <img src="/mediabox-lightbg.svg" className={classes.logo} />
            </Grid>
            <Grid item xs={12} md={6} lg={6} className={classes.paddedMdAndDown}>
              <Typography variant="button" className={classes.footerHeader}>
                Quick Links
              </Typography>
              <Grid container className={classes.smallVerticalPadding}>
                <Grid item xs={12} sm={6} md={6}>
                  <List className={classes.noPadding} disablePadding>
                    <Link href="/why-mediabox" passHref>
                      <ListItem className={classes.linkListItem} button>
                          <ListItemText primary="Why MediaBox" />
                      </ListItem>
                    </Link>
                    <Link href="/brand" passHref>
                      <ListItem className={classes.linkListItem} button>
                          <ListItemText primary="Brand"/>
                      </ListItem>
                    </Link>
                    <Link href="/about-us" passHref>
                      <ListItem className={classes.linkListItem} button>
                        <ListItemText primary="About us" />
                      </ListItem>
                    </Link>
                    <Link href="/contact" passHref>
                      <ListItem className={classes.linkListItem} button>
                        <ListItemText primary="Contact" />
                      </ListItem>
                    </Link>
                  </List>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <List className={classes.noPadding} disablePadding>
                    <ListItem className={classes.linkListItem}>
                      <ListItemText primary="Account" />
                    </ListItem>
                    <Link href="/faqs" passHref>
                      <ListItem className={classes.linkListItem} button>
                        <ListItemText primary="FAQs" />
                      </ListItem>
                    </Link>
                    <ListItem className={classes.linkListItem}>
                      <ListItemText primary="Login" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} lg={3} className={classes.paddedMdAndDown}>
              <Typography variant="button" className={classes.footerHeader}>
                Contact Details
              </Typography>
              <div className={classes.smallVerticalPadding}>
                <Typography variant="body1">
                  20-22 Wenlock Road,
                </Typography>
                <Typography variant="body1" paragraph>
                  London, N1 7GU
                </Typography>
                <Typography variant="body1">
                  0203 7459067
                </Typography>
                <Typography variant="body1">
                  info@mediaboxsolutions.co.uk
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </footer>
      <div className={classes.copyright}>
        <Container>
          <div className={classes.flex}>
            <div className={classes.copyrightText}>
              &copy; { (new Date()).getFullYear() } MediaBox.
            </div>
            <div>Links</div>
          </div>
        </Container>
      </div>
      <Link href="/">
        <a className="footer__homeButton">
          <i className="fa fa-home" />
        </a>
      </Link>
    </>
  )
}



export default Footer;
