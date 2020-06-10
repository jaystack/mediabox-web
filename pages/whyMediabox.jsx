import React from "react";

import { getWhyMediaboxContent } from "../data/whyMediabox";
import MediaBlock from "../components/MediaBlock";
import ActionBlock from "../components/ActionBlock";

export const getServerSideProps = async () => {
  const content = await getWhyMediaboxContent();
  return {
    props: {
      content: content,
    },
  };
};

function WhyMediaBox({ content }) {
  const { videoBanner, hero, actionBlock } = content;
  return (
    <>
      <MediaBlock {...videoBanner} skiplink />
      <MediaBlock {...hero} />
      <ActionBlock {...actionBlock} />
    </>
  );
}

export default WhyMediaBox;
