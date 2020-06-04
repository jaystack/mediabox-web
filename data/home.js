const homeContent = {
  videoBanner: {
    title: "advanced digital asset and brand management software",
    subTitle: "protecting your assets, globally, from one centralised resource. ",
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
    content: `<div>
    <p>MediaBox is a cloud-based product offering a centralised asset management system and an integrated suite of software solutions to manage and manipulate your media assets efficiently.</p>
    <p>Allowing collaboration with clients and colleagues all over the world, from one centralised management tool.</p>
    <h3>VIEW A DEMO</h3>
    </div>`,
    asset: {
      assetType: "image",
      parallax: true,
      img: {
        src: "/images/home/Group-of-people-using-computer-to-share-files_1920px.jpg",
        alt: "",
      }
    },
  }
};

export const getHomeContent = async () => Promise.resolve(homeContent);
