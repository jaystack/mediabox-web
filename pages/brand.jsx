import React from "react";

import { getBrandContent } from "../data/brand";
import MediaBlock from "../components/MediaBlock";
import ActionBlock from "../components/ActionBlock";
import Article from "../components/Article";

export const getServerSideProps = async () => {
  const content = await getBrandContent();
  return {
    props: {
      content: content,
    },
  };
};

function Brand({ content }) {
  const {
    videoBanner,
    hero,
    brandArticle,
    diagonalBanner,
    speedArticle,
    platformArticle,
    actionBlock,
  } = content;
  return (
    <>
      <MediaBlock {...videoBanner} skiplink />
      <MediaBlock {...hero} />
      <Article {...brandArticle} />
      <MediaBlock {...diagonalBanner} />
      <Article {...speedArticle} />
      <Article {...platformArticle} />
      <ActionBlock {...actionBlock} />
    </>
  );
}

export default Brand;
