import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import makeStyles from '@material-ui/core/styles/makeStyles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import {motion, useSpring} from 'framer-motion';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import HideOnScroll from './HideOnScroll';

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
    height: theme.spacing(3),
    width: 'auto',
  },
  start: {
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
    }
  },
  mid: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  dropDown: {
    width: theme.spacing(30),
    zIndex: theme.zIndex.appBar + 1,
    position: 'relative',
  },
  dropDownInner: {
    position: 'relative',
  },
  dropDownInnerTriangle: {
    content: '""',
    display: 'block',
    width: theme.spacing(2),
    height: theme.spacing(2),
    borderWidth: theme.spacing(1),
    borderColor: 'transparent',
    borderBottomColor: 'white',
    borderStyle: 'solid',
    transform: 'translate(-50%)',
    transformOrigin: 'center',
    position: 'absolute',
    left: '50%',
    top: -theme.spacing(2),
  },
  dropDownPaper: {
    marginTop: theme.spacing(1),
    overflow: 'hidden',
    position: 'relative',
  },
}));

function PageHeader(props) {

  // TODO - output all nodes, use React.cloneElement
  //  to replace content of dropdown

  const classes = useStyles();
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [desktopMenuOpen, setDesktopMenuOpen] = React.useState(false);
  const [activeParent, setActiveParent] = React.useState(null);
  const timeoutRef = React.useRef(null);
  const appBarRef = React.useRef(null);
  const dropdownRef = React.useRef(null);
  const midRef = React.useRef(null);

  const xPos = useSpring(0, { stiffness: 300, damping:25 });

  const resetTimer = () => clearTimeout(timeoutRef.current);
  const dismiss = () => setDesktopMenuOpen(0);

  const handleMenu = id => e => {
    setDesktopMenuOpen(true);
    setActiveParent(id);
    const { x, width } = e.currentTarget.getBoundingClientRect();
    xPos.set(x - theme.spacing(15) + (width / 2));
    resetTimer();
  };

  const handleMenuClose = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopMenuOpen(false);
    }, 600);
  };

  const renderFeatures = () => (
    <List dense>
      <Link href="/digital-asset-management" passHref>
        <ListItem button divider component="a" onClick={dismiss}>
          <ListItemText primary="Digital Asset Management" />
        </ListItem>
      </Link>
      <Link href="/brand" passHref>
        <ListItem button component="a" onClick={dismiss}>
          <ListItemText primary="Brand Management" />
        </ListItem>
      </Link>
    </List>
  );

  const renderAbout = () => (
    <List dense>
      <Link href="/about-us" passHref>
        <ListItem button divider component="a" onClick={dismiss}>
          <ListItemText primary="Who Are MediaBox?" />
        </ListItem>
      </Link>
      <Link href="/why-mediabox" passHref>
        <ListItem button divider component="a" onClick={dismiss}>
          <ListItemText primary="Why MediaBox?" />
        </ListItem>
      </Link>
      <Link href="/faqs" passHref>
        <ListItem button component="a" onClick={dismiss}>
          <ListItemText primary="Frequently Asked Questions" />
        </ListItem>
      </Link>
    </List>
  );

  const renderDrawdown = () => {
    switch (activeParent) {
      case 0:
        return renderFeatures();
      case 1:
        return renderAbout();
      default:
        return <div/>;
    }
  };

  // React.useEffect(() => {
  //   const { x, width } = midRef.current.getBoundingClientRect();
  //   xPos.set(x + (width / 2));
  //   xPos.stop();
  // }, []);

  return (
    <React.Fragment>
      <motion.div
        style={{
          x: xPos,
          top: appBarRef.current?.getBoundingClientRect().bottom,
          position: 'fixed',
          zIndex: theme.zIndex.appBar,
        }}
        ref={dropdownRef}
        className={classes.dropDown}
      >
        <Grow in={desktopMenuOpen} style={{ transformOrigin: 'center top' }}>
          <div className={classes.dropDownInner}>
            <div className={classes.dropDownInnerTriangle} />
            <Paper
              className={classes.dropDownPaper}
              onMouseEnter={resetTimer}
              onMouseLeave={handleMenuClose}
            >
              {/*<AnimatePresence exitBeforeEnter>*/}
              {/*  <motion.div*/}
              {/*    key={activeParent}*/}
              {/*    variants={standardWithAbsTransition}*/}
              {/*    animate="enter"*/}
              {/*    initial="initial"*/}
              {/*    exit="exit"*/}
              {/*  >*/}
                  { renderDrawdown() }
              {/*  </motion.div>*/}
              {/*</AnimatePresence>*/}
            </Paper>
          </div>
        </Grow>
      </motion.div>
      <HideOnScroll subscribe={dismiss}>
        <AppBar ref={appBarRef}>
          <Toolbar>
            <div className={classes.start}>
              <Link href="/" passHref>
                <a>
                  <img src="/mediabox-logo-textonly.svg" className={classes.brand} />
                </a>
              </Link>
            </div>
              <div className={classes.mid} ref={midRef}>
                <Button
                  color="inherit"
                  component="a"
                  onMouseEnter={handleMenu(0)}
                  onMouseLeave={handleMenuClose}
                >
                  Features
                </Button>
                <Link href="/about-us" passHref>
                  <Button
                    onClick={dismiss}
                    color="inherit"
                    component="a"
                    onMouseEnter={handleMenu(1)}
                    onMouseLeave={handleMenuClose}
                  >
                    About
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button color="inherit" component="a">Contact</Button>
                </Link>
              </div>
            <div className={classes.end}>
              <Link href="/contact" passHref>
                <Button color="inherit" component="a">Sign In</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/*<Toolbar />*/}
    </React.Fragment>
  );
}

export default PageHeader;
