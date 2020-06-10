const heroVideo = {
  type: "vimeo",
  videoId: "336368135",
  buttonLabel: "VIEW A DEMO",
};
const homeContent = {
  videoBanner: {
    title: "advanced digital asset and brand management software",
    subTitle:
      "protecting your assets, globally, from one centralised resource. ",
    variant: ["-mediaMaskOpacity065"],
    content: "",
    asset: {
      assetType: "video",
      video: {
        autoPlay: true,
        loop: true,
      },
      source: {
        src: "/videos/abstract-earth-background-L7GKP7B_x264_001.mp4",
        type: "video/mp4",
      },
    },
  },
  hero: {
    title: "share and promote your digital assets with mediabox",
    subTitle: "",
    variant: ["-smallerTitle"],
    content: `<div>
    <p>MediaBox is a cloud-based product offering a centralised asset management system and an integrated suite of software solutions to manage and manipulate your media assets efficiently.</p>
    <p>Allowing collaboration with clients and colleagues all over the world, from one centralised management tool.</p>
    </div>`,
    video: { ...heroVideo },
    asset: {
      assetType: "image",
      parallax: false,
      img: {
        src:
          "/images/home/Group-of-people-using-computer-to-share-files_1920px.jpg",
        alt: "",
      },
    },
  },
  introduction: {
    title:
      "MediaBox automates marketing’s creative, acquisition, execution and fulfilment processes.",
    subTitle:
      "Enabling corporate marketing departments to ingest, create, store, edit, and fulfil demands for marketing assets globally.",
    variant: ["-autoHeight", "-introduction", "-bottomDiagonal"],
    asset: {
      assetType: "video",
      maskColor: "#000",
      maskOpacity: 0.8,
      video: {
        autoPlay: true,
        loop: true,
      },
      source: {
        src: "/videos/creative-team.mp4",
        type: "video/mp4",
      },
    },
    icon: "globe",
  },

  diagonalBanner: {
    title: "brand management",
    subTitle: "the all-in-one solution to manage & distribute content.",
    variant: [
      "-topDiagonal",
      "-bottomDiagonal",
      "-autoHeight",
      "-showVideoBottom",
      "-smallerTitle",
    ],
    asset: {
      assetType: "video",
      maskColor: "#333334",
      maskOpacity: 0.68,
      video: {
        autoPlay: true,
        loop: true,
      },
      source: {
        src: "/videos/coffe.mp4",
        type: "video/mp4",
      },
    },
    ctaButton: {
      label: "LEARN MORE",
      url: "/brand/",
      variant: ["-buttonLg"],
    },
  },

  article: {
    title: "complete asset management",
    subTitle: "The All-in-One Digital Asset Management Solution",
    icon: "sitemap",
    variant: ["-autoHeight", "-whiteTheme", "-boldArticleListItem"],
    ctaButton: {
      label: "LEARN MORE",
      url: "/digital-asset-management/",
      variant: ["-buttonLg"],
    },
    content: `<ul>
        <li>Upload</li>
        <li>Store</li>
        <li>Organise</li>
        <li>Manage</li>
        <li>Find</li>
        <li>Distribute</li>
        <li>Protect</li>
        <li>Promote</li>
        </ul>
        <p>All your digital assets in one place, with secure access anytime, anywhere, worldwide.</p>`,
    image: {
      src: "images/home/All-in-one-asset-management1000px_1-1536x1536.jpg",
      alt: "",
    },
  },

  actionBlock: {
    title: "START CENTRALISING, SHARING & PROMOTING YOUR ASSETS NOW",
    subTitle: "Protecting your brand, globally, from one centralised resource.",
    video: { ...heroVideo },
  },
};

export const getHomeContent = async () => Promise.resolve(homeContent);
