import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import {AnimatePresence, motion, useSpring} from 'framer-motion';
import { fade } from '@material-ui/core/styles/colorManipulator';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import HideOnScroll from './HideOnScroll';
import {useAutoHeightAnimation} from '../lib/useAutoHeightAnimation';
import {standardTransition} from '../lib/transitions';

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
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(2.25),
    }
  },
  brandA: {
    '-webkit-tap-highlight-color': 'transparent',
    display: 'block',
  },
  start: {
    flexGrow: 1,
    position: 'relative',
  },
  end: {
    position: 'relative',
  },
  mid: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: theme.spacing(24),
    right: theme.spacing(24),
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
    zIndex:20,
    left: '50%',
    top: -theme.spacing(2),
  },
  dropDownPaper: {
    marginTop: theme.spacing(1),
    overflow: 'hidden',
    position: 'relative',
  },
  hiddenDesktop: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  hiddenMobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  mobileMenu: {
    background: fade(theme.palette.secondary.main, .95),
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    position: 'fixed',
    top: theme.spacing(7),
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: theme.zIndex.appBar - 1,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  sectionTitle: {
    fontWeight: 900,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
}));

const RenderSegmentFrame = ({ children, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.section} key={title}>
      <Typography
        variant="h5"
        component="p"
        className={classes.sectionTitle}
      >
        { title }
      </Typography>
      { children }
    </div>
  );
};

RenderSegmentFrame.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  delay: PropTypes.number,
};

function PageHeader(props) {

  // TODO - output all nodes, use React.cloneElement
  //  to replace content of dropdown

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [desktopMenuOpen, setDesktopMenuOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeParent, setActiveParent] = React.useState(null);
  const timeoutRef = React.useRef(null);
  const appBarRef = React.useRef(null);
  const dropdownRef = React.useRef(null);
  const midRef = React.useRef(null);
  const inner = React.useRef(null);

  const spring = { stiffness: 300, damping:25 };
  const heightSpring = { duration: .2, type: "tween" };
  // const heightSpring = { stiffness: 25, damping:100, mass: .5, velocity: 2 };
  const [controls, ref] = useAutoHeightAnimation(heightSpring, [activeParent]);
  const xPos = useSpring(0, spring);

  const resetTimer = () => clearTimeout(timeoutRef.current);
  const dismiss = () => {
    setDesktopMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const handleMenu = id => e => {
    setDesktopMenuOpen(true);
    setActiveParent(id);
    const { x, width } = e.currentTarget.getBoundingClientRect();
    const nx = x - theme.spacing(15) + (width / 2);
    xPos.set(nx);
    resetTimer();
  };

  const handleMenuClose = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopMenuOpen(false);
    }, 600);
  };

  const handleToggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const renderFeatures = dense => (
    <List dense={!dense} ref={inner}>
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

  const renderAbout = dense => (
    <List dense={!dense} ref={inner}>
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

  const renderContact = dense => (
    <List dense={!dense} ref={inner}>
      <ListItem button divider component="a" onClick={dismiss} href="tel:+442037459067">
        <ListItemText primary="+44 2037 459067" />
      </ListItem>
      <ListItem button component="a" onClick={dismiss} href="mailto:info@mediaboxsolutions.co.uk">
        <ListItemText primary="info@mediaboxsolutions.co.uk" />
      </ListItem>
    </List>
  );



  const renderDrawdown = () => {
    switch (activeParent) {
      case 0:
        return renderFeatures();
      case 1:
        return renderAbout();
      case 2:
        return renderContact();
      default:
        return <div/>;
    }
  };

  React.useEffect(() => {
    const { x, width } = midRef.current.getBoundingClientRect();
    xPos.set(x + (width / 2));
    xPos.stop();

  }, []);

  React.useEffect(
    () => { document.body.style.overflow = mobileMenuOpen ? 'hidden' : null},
    [mobileMenuOpen],
  );

  return (
    <React.Fragment>
      <motion.div
        style={{
          x: xPos,
          top: appBarRef.current?.getBoundingClientRect().bottom,
          position: 'fixed',
        }}
        ref={dropdownRef}
        className={classes.dropDown}
      >
        <Grow in={desktopMenuOpen && !isMobile} style={{ transformOrigin: 'center top' }}>
          <div className={classes.dropDownInner}>
            <div className={classes.dropDownInnerTriangle} />
            <Paper
              className={classes.dropDownPaper}
              onMouseEnter={resetTimer}
              onMouseLeave={handleMenuClose}
              elevation={7}
            >
              <motion.div style={{ transformOrigin: "top" }} animate={controls} ref={ref}>
                { renderDrawdown() }
              </motion.div>
            </Paper>
          </div>
        </Grow>
      </motion.div>


      <Slide in={mobileMenuOpen && isMobile} direction="up" >
        <div className={classes.mobileMenu}>
          { <RenderSegmentFrame title="Features">{ renderFeatures(true) }</RenderSegmentFrame> }
          { <RenderSegmentFrame title="About">{ renderAbout(true) }</RenderSegmentFrame> }
          { <RenderSegmentFrame title="Contact">{ renderContact(true) }</RenderSegmentFrame> }
        </div>
      </Slide>



      <HideOnScroll subscribe={dismiss} disable={isMobile && mobileMenuOpen}>
        <AppBar ref={appBarRef}>
          <Toolbar>
            <div className={classes.start}>
              <Link href="/" passHref>
                <a className={classes.brandA} onClick={dismiss}>
                  <img
                    src={'/mediabox-emblem-darkbg.svg'}
                    className={clsx(classes.brand, classes.hiddenDesktop)}
                  />
                  <img
                    src={'/mediabox-logo-textonly.svg'}
                    className={clsx(classes.brand, classes.hiddenMobile)}
                  />
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
                <Button
                  onClick={dismiss}
                  color="inherit"
                  component="a"
                  onMouseEnter={handleMenu(2)}
                  onMouseLeave={handleMenuClose}
                >
                  Contact
                </Button>
              </Link>
            </div>
            <div className={classes.end}>
              <Link href="/contact" passHref>
                <Button color="inherit" component="a" className={classes.hiddenMobile}>
                  Sign In
                </Button>
              </Link>
              <div>
                <IconButton
                  color="inherit"
                  className={classes.hiddenDesktop}
                  onClick={handleToggleMobileMenu}
                >
                  <AnimatePresence>
                    <motion.div variants={standardTransition} initial="initial" exit="exit" animate="enter">
                      {
                        mobileMenuOpen
                          ? <CloseIcon style={{display: 'block'}} />
                          : <MenuIcon style={{display: 'block'}} />
                      }
                    </motion.div>
                  </AnimatePresence>
                </IconButton>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/*<Toolbar />*/}
    </React.Fragment>
  );
}

export default PageHeader;
