import React from "react";

import { getHomeContent } from "../data/home";
import MediaBlock from "../components/MediaBlock";
import ActionBlock from "../components/ActionBlock";
import Article from "../components/Article";

export const getServerSideProps = async () => {
  const homeContent = await getHomeContent();
  return {
    props: {
      homeContent,
    },
  };
};

function Home({ homeContent }) {
  const {
    hero,
    videoBanner,
    introduction,
    diagonalBanner,
    article,
    actionBlock,
  } = homeContent;
  return (
    <>
      <MediaBlock
        title={videoBanner.title}
        subTitle={videoBanner.subTitle}
        content={videoBanner.content}
        asset={{
          ...videoBanner.asset,
        }}
        variant={videoBanner.variant}
        skiplink
      />
      <MediaBlock
        title={hero.title}
        subTitle={hero.subTitle}
        content={hero.content}
        asset={{
          ...hero.asset,
        }}
        video={{
          type: hero.video.type,
          videoId: hero.video.videoId,
          buttonLabel: hero.video.buttonLabel,
        }}
        variant={[...hero.variant]}
      />
      <MediaBlock
        title={introduction.title}
        subTitle={introduction.subTitle}
        asset={{
          ...introduction.asset,
        }}
        icon={introduction.icon}
        variant={introduction.variant}
      />
      <Article
        title={article.title}
        subTitle={article.subTitle}
        video={article.video}
        icon={article.icon}
        variant={article.variant}
        ctaButton={article.ctaButton}
        content={article.content}
        image={article.image}
      />
      <MediaBlock
        title={diagonalBanner.title}
        subTitle={diagonalBanner.subTitle}
        asset={{
          ...diagonalBanner.asset,
        }}
        ctaButton={{
          ...diagonalBanner.ctaButton,
        }}
        variant={diagonalBanner.variant}
      />
      <ActionBlock
        title={actionBlock.title}
        subTitle={actionBlock.subTitle}
        video={actionBlock.video}
      />
    </>
  );
}

export default Home;
