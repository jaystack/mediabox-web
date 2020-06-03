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

import CollapsibleList from "../components/CollapsibleList";

export const getServerSideProps = async () => {
  const faqContent = await getFaqContent();
  return {
    props: {
      faqContent,
    },
  };
};

function Faqs({ faqContent }) {
  const { hero, collapsibleList } = faqContent;

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
        variant={["-bottomDiagonal", "-specialFaqsBackground"]}
      />
      <CollapsibleList items={collapsibleList} variant={["-contentLightText"]} />
    </>
  );
}

export default Faqs;
