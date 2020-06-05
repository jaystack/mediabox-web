import React from "react";

import { getHomeContent } from "../data/home";
import MediaBlock from "../components/MediaBlock";
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
        video={{
          type: hero.video.type,
          videoId: hero.video.videoId,
          buttonLabel: hero.video.buttonLabel,
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
        variant={introduction.variant}
      />
      <Article
        title={"complete asset management"}
        subTitle={"The All-in-One Digital Asset Management Solution"}
        content={hero.content}
        asset={null}
        video={{
          type: hero.video.type,
          videoId: hero.video.videoId,
          buttonLabel: hero.video.buttonLabel,
        }}
        icon={"sitemap"}
        variant={["-autoHeight", "-whiteTheme"]}
        ctaButton={{
          ...diagonalBanner.ctaButton,
        }}
        content={`<ul>
        <li style="opacity: 1; left: 0px;"><i class="icon-default-style icon-arrow-right extra-color-1"></i> <strong>Upload</strong></li>
        <li style="opacity: 1; left: 0px;"><i class="icon-default-style icon-arrow-right extra-color-1"></i> <strong>Store</strong></li>
        <li style="opacity: 1; left: 0px;"><i class="icon-default-style icon-arrow-right extra-color-1"></i> <strong>Organise</strong></li>
        <li style="opacity: 1; left: 0px;"><i class="icon-default-style icon-arrow-right extra-color-1"></i> <strong>Manage</strong></li>
        <li style="opacity: 1; left: 0px;"><i class="icon-default-style icon-arrow-right extra-color-1"></i> <strong>Find</strong></li>
        <li style="opacity: 1; left: 0px;"><i class="icon-default-style icon-arrow-right extra-color-1"></i> <strong>Distribute</strong></li>
        <li style="opacity: 1; left: 0px;"><i class="icon-default-style icon-arrow-right extra-color-1"></i> <strong>Protect</strong></li>
        <li style="opacity: 1; left: 0px;"><i class="icon-default-style icon-arrow-right extra-color-1"></i> <strong>Promote</strong></li>
        </ul>
        <p>All your digital assets in one place, with secure access anytime, anywhere, worldwide.</p>
        `}
        image={{
          src: "images/home/All-in-one-asset-management1000px_1-1536x1536.jpg",
          alt: "",
        }}
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
