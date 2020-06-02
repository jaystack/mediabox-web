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
  const { hero } = faqContent;

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
      <CollapsibleList
        items={[
          {
            title: "What digital assets can MediaBox store?",
            content: `<div style=""><div class="inner-toggle-wrap">
          <div class="wpb_text_column wpb_content_element ">
            <div class="wpb_wrapper">
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
            </div>
          </div>
          
          
          
          </div></div>`,
          },
          {
            title: "How are my files stored?",
            content:
              "<div>A cloud based system backed up by XXX servers, saving you space and cost on storage.</div>",
          },
          {
            title: "Who can use it?",
            content:
              "<p>Anyone.&nbsp; With our bespoke permissions controls you can choose exactly who sees and adds what assets, and control how they can use them.&nbsp; With MediaBox, you are in the driving seat.</p>",
          },
          {
            title: "What devices is it compatible with?",
            content: `<div class="wpb_wrapper">
            <p>Desktop computers and mobile devices on Android and Apple</p>
        <div class="nectar_icon_wrap" data-style="border-animation" data-draw="" data-border-thickness="2px" data-padding="20px" data-color="accent-color" style="margin-right: 5px; ">
            <div class="nectar_icon"><i style="font-size: 30px; line-height: 45px; height: 45px; width: 45px;" class="fa fa-android"></i></div>
          </div><div class="nectar_icon_wrap" data-style="border-animation" data-draw="" data-border-thickness="2px" data-padding="20px" data-color="accent-color" style="">
            <div class="nectar_icon"><i style="font-size: 30px; line-height: 45px; height: 45px; width: 45px;" class="fa fa-apple"></i></div>
          </div>
          </div>`,
          },
          {
            title:
              "Which operating systems and browsers does your system support, and is there complete feature parity across operating systems and browsers?",
            content: "<div>TBA</div>",
          },
          {
            title: "How does it integrate with our workflows?",
            content: "<div>TBA</div>",
          },
          { title: "How much does it cost?", content: "<div>TBA</div>" },
          {
            title: "Can you tailor the suite to match my needs?",
            content: "<div>Yes. Our team are on hand to discuss your requirements to make the system work for you.</div>",
          },
        ]}
      />
    </>
  );
}

export default Faqs;
