import React from 'react';
import * as PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    background: '#fff',
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
    <React.Fragment>
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
                <Grid item xs={12} sm={12} md={6}>
                  <List className={classes.noPadding}>
                    <ListItem className={classes.linkListItem}>
                      <ListItemText primary="Why mediabox" />
                    </ListItem>
                    <ListItem className={classes.linkListItem}>
                      <ListItemText primary="Brand" />
                    </ListItem>
                    <ListItem className={classes.linkListItem}>
                      <ListItemText primary="About us" />
                    </ListItem>
                    <ListItem className={classes.linkListItem}>
                      <ListItemText primary="Contact" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <List className={classes.noPadding}>
                    <ListItem className={classes.linkListItem}>
                      <ListItemText primary="Account" />
                    </ListItem>
                    <ListItem className={classes.linkListItem}>
                      <ListItemText primary="FAQs" />
                    </ListItem>
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
    </React.Fragment>
  )
}



export default Footer;
