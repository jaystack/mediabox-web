import React from 'react';
import * as PropTypes from 'prop-types';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import {fadeTransition} from '../lib/transitions';

import Typography from '@material-ui/core/Typography';
import PageHero from '../components/PageHero';
import useTheme from '@material-ui/core/styles/useTheme';;
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
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
        <title>Frequently Asked Questions</title>
      </Head>
      <PageHero title="Frequently Asked Questions" image="/faqs.jpg" />
      <motion.div
        variants={fadeTransition(0.4)}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div>
          <div style={{ position: 'relative' }} className={classes.padded}>
            <Container>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                  <Typography className={classes.heading}>
                    What digital assets can MediaBox store?
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography variant="body1">
                    <p>A digital asset can be in the form of a document, presentation, image, video, audio file</p>
                    <p>Images</p>
                    <ul>
                      <li>Jpg, gif, bmp, png, tiff, svg, eps, raw, Psd, svg,</li>
                      <li>RAW</li>
                    </ul>
                    <p>Artwork</p>
                    <ul>
                      <li>Psd, ai, indd, creative suite formats InDesign etc.</li>
                      <li>CDR, EPS, PDF, RAW (.raw, .cr2, .nef, .orf, .sr2 etc),</li>
                    </ul>
                    <p>Videos</p>
                    <ul>
                      <li>Wmv, mpg, mpg4, mov, mpeg, wma, wmv, avi, flv, rm, m4v,</li>
                      <li>OGG, QT, AVCHD, FLV/SWF, MPV, MP2, MPE, WEBM</li>
                    </ul>
                    <p>Audio</p>
                    <ul>
                      <li>Mp3, wav,</li>
                      <li>AIFF, WMA</li>
                    </ul>
                    <p>Documents</p>
                    <ul>
                      <li>Pdf, doc, docx, xls, Excel ,xlsx, ppt, pptx, zip</li>
                      <li>HTML, HTM, ODT, ODS, TXT</li>
                    </ul>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                  <Typography className={classes.heading}>How are my files stored?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography variant="body1">
                    A cloud based system backed up by XXX servers, saving you space and cost on storage.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                  <Typography className={classes.heading}>Who can use it?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography variant="body1">
                    Anyone.  With our bespoke permissions controls you can choose exactly who sees and adds what assets, and control how they can use them. With MediaBox, you are in the driving seat.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                  <Typography className={classes.heading}>Which operating systems and browsers does your system support, and is there complete feature parity across operating systems and browsers?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography variant="body1">
                    TBA
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                  <Typography className={classes.heading}>How does it integrate with our workflows?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography variant="body1">
                    TBA
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                  <Typography className={classes.heading}>How much does it cost?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography variant="body1">
                    TBA
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                  <Typography className={classes.heading}>Can you tailor the suite to match my needs?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography variant="body1">
                    Yes. Our team are on hand to discuss your requirements to make the system work for you.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Container>
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
