import React from "react";

import { getHomeContent } from "../data/home";
import MediaBlock from "../components/MediaBlock";
import ActionBlock from "../components/ActionBlock";
import Article from "../components/Article";

export const getServerSideProps = async () => {
  const content = await getHomeContent();
  return {
    props: {
      content: content,
    },
  };
};

function Home({ content }) {
  const {
    videoBanner,

    hero,
    introduction,
    diagonalBanner,
    article,
    actionBlock,
  } = content;
  return (
    <>
      <MediaBlock {...videoBanner} skiplink />
      <MediaBlock {...hero} />
      <MediaBlock {...introduction} />
      <Article {...article} />
      <MediaBlock {...diagonalBanner} />
      <ActionBlock {...actionBlock} />
    </>
  );
}

export default Home;
