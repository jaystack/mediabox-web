import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/Menu';
import HideOnScroll from './HideOnScroll';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  brand: {
    maxHeight: theme.spacing(3),
  },
  start: {
    flexGrow: 1,
  }
}));

function PageHeader(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <div className={classes.start}>
              <Link href="/" passHref>
                <a>
                  <img src="/mediabox-logo-textonly.svg" className={classes.brand} />
                </a>
              </Link>
            </div>
            <Link href="/contact" passHref>
              <Button color="inherit" component="a">Contact</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/*<Toolbar />*/}
    </React.Fragment>
  );
}

export default PageHeader;
