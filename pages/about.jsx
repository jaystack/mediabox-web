import React from "react";

import { getAboutContent } from "../data/about";
import MediaBlock from "../components/MediaBlock";
import ActionBlock from "../components/ActionBlock";

export const getServerSideProps = async () => {
  const content = await getAboutContent();
  return {
    props: {
      content: content,
    },
  };
};

function About({ content }) {
  const { videoBanner, hero, actionBlock } = content;
  return (
    <>
      <MediaBlock {...videoBanner} skiplink />
      <MediaBlock {...hero} />
      <ActionBlock {...actionBlock} />
    </>
  );
}

export default About;
