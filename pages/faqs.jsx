import React from "react";
import * as PropTypes from "prop-types";
import Head from "next/head";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { fadeTransition } from "../lib/transitions";

import Typography from "@material-ui/core/Typography";
import PageHero from "../components/PageHero";
import useTheme from "@material-ui/core/styles/useTheme";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Container from "@material-ui/core/Container";
import GotQuestion from "../components/GotQuestion";
import StandardCTA from "../components/StandardCTA";

// --- new
import { getFaqContent } from "../data/faq";
import MediaBlock from "../components/MediaBlock";

export const getServerSideProps = async () => {
  const faqContent = await getFaqContent();
  return {
    props: {
      faqContent,
    },
  };
};

// const style = theme => ({
//   padding: {
//     padding: theme.spacing(3),
//   },
//   categoryPickerOffset: {
//     marginTop: theme.spacing(3),
//   },
//   splitSectionText: {
//     background: '#fff',
//   },
//   padded: {
//     padding: theme.spacing(5),
//     [theme.breakpoints.only('lg')]: {
//       padding: theme.spacing(10),
//     },
//     [theme.breakpoints.only('xl')]: {
//       padding: theme.spacing(15),
//     },
//   },
//   noTopPadding: {
//     paddingTop: 0,
//   },
//   flex: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   backgroundPrimary: {
//     background: theme.palette.primary.main,
//   },
//   smallerIcon: {
//     minWidth: theme.spacing(5),
//   },
//   smallerItem: {
//     marginTop:0,
//     marginBottom:0,
//   },
//   verticalPadding: {
//     paddingTop: theme.spacing(2),
//     paddingBottom: theme.spacing(2),
//   },
//   responsive: {
//     maxWidth: '100%',
//   },
//   listItem: {
//     paddingTop: theme.spacing(0.5),
//     paddingBottom: theme.spacing(0.5),
//   },
//   mapGrid: {
//     position: 'relative',
//     minHeight: theme.spacing(50)
//   },
//   mapContainer: {
//     position: 'absolute',
//     top:0,
//     left:0,
//     right:0,
//     bottom:0,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   heading: {
//     fontSize: theme.spacing(2.75),
//     fontWeight: theme.typography.fontWeightLight,
//   },
// });

// const useStyles = makeStyles(style);

function Faqs({ faqContent }) {
  const { hero } = faqContent;

  const classes = {};
  const theme = useTheme();
  return (
    <>
      <MediaBlock
        title={hero.title}
        subTitle={hero.subTitle}
        content={hero.content}
        asset={{
          src: hero.asset.src,
          alt: hero.asset.alt,
        }}
        variant="bottomDiagonal"
        imageModifiers={["faqsBackground"]}
        mediaModifiers={["masked"]}
      />
    </>
  );
}

Faqs.propTypes = {
  classes: PropTypes.object,
};

export default Faqs;
