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
import GotQuestion from '../components/GotQuestion';
import StandardCTA from '../components/StandardCTA';

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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.spacing(2.75),
    fontWeight: theme.typography.fontWeightLight,
  },
});

const useStyles = makeStyles(style);

function Contact() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <React.Fragment>
      <Head>
        <title>About Us</title>
      </Head>
      <PageHero title="Who Are MediaBox?" image="/about.jpg"/>
      <motion.div
        variants={fadeTransition(0.4)}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div>
          <div style={{position: 'relative', maxWidth: theme.spacing(120), margin: '0 auto'}} className={classes.padded}>
            <Container>
              <Typography component="p" variant="h6" paragraph>
                MediaBox the company has a strong and passionate vision for MediaBox the product and that’s why we are
                building state of the art cutting edge technology to provide our customers with solutions to combat
                business challenges influenced by an ever-changing digital landscape.
              </Typography>
              <Typography component="p" variant="body1" paragraph>
                Behind the scenes there has been a huge investment both in monetary terms and time, strategically
                developing with industry expertise at every level.
              </Typography>
              <Typography component="p" variant="body1" paragraph>
                We strongly believe that existing and often historical practices can be vastly improved with an ease of
                use that will frighten nobody by appearing too complex and therefore difficult to embrace.
              </Typography>
              <Typography component="p" variant="body1" paragraph>
                The UI or user interface has been meticulously planned to appeal to all. It’s about visibility, being
                able to upload, tag, categorise, share, approve, download all digital assets combined within a range of
                easy to use features. The hard work is behind the scenes powered by the finest development techniques to
                ensure “functionality, speed of movement, access and control”.
              </Typography>
              <Typography component="p" variant="body1" paragraph>
                The company has industry specialists to ensure the product meets the requirement and can provide
                tangible business advantage and associated ROI.
              </Typography>
              <Typography component="p" variant="body1" paragraph>
                We have high level expertise in brand management, digital marketing, operations and IT, plus of course
                development specialists.
              </Typography>
              <Typography component="p" variant="body1" paragraph>
                The research has been done, the product journey developed and future proofed.
              </Typography>
              <Typography component="p" variant="body1" paragraph>
                MediaBox a truly modern-age way to manage and share digital assets and promote your brand. A new digital
                world solution.
              </Typography>
            </Container>
            {/*<SectionSeparator fill="#fafafa" height={150} variant="diagonalTop" />*/}
            {/*<SectionSeparator fill="#fafafa" height={150} variant="diagonalBottom" bottom />*/}
          </div>

          <GotQuestion/>
          <StandardCTA/>
        </div>
      </motion.div>
    </React.Fragment>
  )
}

Contact.propTypes = {
  classes: PropTypes.object,
};

export default Contact;
