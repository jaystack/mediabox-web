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
  const { hero, videoBanner, introduction,diagonalBanner } = homeContent;
  return (
    <>
      <MediaBlock
        title={videoBanner.title}
        subTitle={videoBanner.subTitle}
        content={videoBanner.content}
        asset={{
          ...videoBanner.asset,
        }}
        variant={["-specialFaqsBackgroundVideo", "-mediaMaskOpacity065"]}
        skiplink
      />
      <MediaBlock
        title={hero.title}
        subTitle={hero.subTitle}
        content={hero.content}
        asset={{
          ...hero.asset,
        }}
        variant={["-specialFaqsBackgroundImage"]}
      />
      <MediaBlock
        title={introduction.title}
        subTitle={introduction.subTitle}
        asset={{
          ...introduction.asset,
        }}
        icon={introduction.icon}
        variant={["-autoHeight", "-introduction","-bottomDiagonal"]}
      />
      <MediaBlock
        title={diagonalBanner.title}
        subTitle={diagonalBanner.subTitle}
        asset={{
          ...diagonalBanner.asset,
        }}
        ctaButton={{
          label: diagonalBanner.ctaButton.label,
          url: diagonalBanner.ctaButton.url,
        }}
        variant={["-autoHeight", "-topDiagonal","-bottomDiagonal"]}
      />
    </>
  );
}

export default Home;
