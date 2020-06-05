const homeContent = {
  videoBanner: {
    title: "advanced digital asset and brand management software",
    subTitle: "protecting your assets, globally, from one centralised resource. ",
    variant: ["-specialFaqsBackgroundVideo", "-mediaMaskOpacity065"],
    content: "",
    asset: {
      assetType: "video",
      video: {
        autoPlay: true,
        loop: true
      },
      source: {
        src: "/videos/abstract-earth-background-L7GKP7B_x264_001.mp4",
        type: "video/mp4",
      }
    },
  },
  hero: {
    title: "share and promote your digital assets with mediabox",
    subTitle: "",
    variant: [],
    content: `<div>
    <p>MediaBox is a cloud-based product offering a centralised asset management system and an integrated suite of software solutions to manage and manipulate your media assets efficiently.</p>
    <p>Allowing collaboration with clients and colleagues all over the world, from one centralised management tool.</p>
    <h3>VIEW A DEMO</h3>
    </div>`,
    asset: {
      assetType: "image",
      parallax: false,
      img: {
        src: "/images/home/Group-of-people-using-computer-to-share-files_1920px.jpg",
        alt: "",
      }
    },
  },
  introduction: {
    title: "MediaBox automates marketing’s creative, acquisition, execution and fulfilment processes.",
    subTitle: "Enabling corporate marketing departments to ingest, create, store, edit, and fulfil demands for marketing assets globally.",
    variant: ["-autoHeight", "-introduction", "-bottomDiagonal"],
    asset: {
      assetType: "video",
      maskColor: "#000",
      maskOpacity: 0.8,
      video: {
        autoPlay: true,
        loop: true
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
    variant: ["-topDiagonal", "-bottomDiagonal"],
    asset: {
      assetType: "video",
      maskColor: "#333334",
      maskOpacity: 0.68,
      video: {
        autoPlay: true,
        loop: true
      },
      source: {
        src: "/videos/coffe.mp4",
        type: "video/mp4",
      },
    },
    ctaButton: {
      label: "LEARN MORE",
      url: "/brand/",
      variant: ["-buttonLg"]
    }
  },
};

export const getHomeContent = async () => Promise.resolve(homeContent);
