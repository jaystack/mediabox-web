import React from "react";

import { getHomeContent } from "../data/home";
import MediaBlock from "../components/MediaBlock";

export const getServerSideProps = async () => {
  const homeContent = await getHomeContent();
  return {
    props: {
      homeContent,
    },
  };
};

function Home({ homeContent }) {
  const { hero, videoBanner, introduction, diagonalBanner } = homeContent;
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
        variant={hero.variant}
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
    </>
  );
}

export default Home;
