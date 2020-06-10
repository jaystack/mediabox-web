const heroVideo = {
  type: "vimeo",
  videoId: "336368135",
  buttonLabel: "VIEW A DEMO",
};
const whyMediaboxContent = {
  videoBanner: {
    title: "why mediabox?",
    subTitle:
      "future-proofing the way you manage and control your digital assets",
      // // // OPACITY 0.7!!!
    variant: ["-mediaMaskOpacity065"],
    content: "",
    asset: {
      assetType: "video",
      video: {
        autoPlay: true,
        loop: true,
      },
      source: {
        src: "/videos/why-mediabox-x264-bdbzsjmhcompressed-as3n8nul_GoYfglGR.compressed.mp4",
        type: "video/mp4",
      },
    },
  },
  hero: {
    title: "175 ZB of digital data by 2025",
    subTitle: "",
    variant: ["-smallerTitle", "-bottomDiagonal", "-longContent"],
    content: `<div>
    <p>At MediaBox we understand the growing demands of data and the importance of storing and sending it on time and securely.  With digital assets and files increasing in size, the simple task of sending those assets, but also making them available to the wider business, clients, agents and third parties, can seem at times an impossible task.</p>
    <h3>mediaBox offers the solution</h3>
    <p>A solution that can just about store every digital file type imaginable, with huge intelligent metadata capabilities to better enable search and share and make “operational life easier” and for business leaders present tangible ROI through everything from process improvement to remote working, reporting, marketing and promotions.</p>
    </div>`,
    video: { ...heroVideo },
    asset: {
      assetType: "image",
      parallax: false,
      img: {
        src:
          "/images/whyMediabox/Happy_staff_deliver_brandconsistency.jpg",
        alt: "",
      },
    },
  },
  actionBlock: {
    title: "START CENTRALISING, SHARING & PROMOTING YOUR ASSETS NOW",
    subTitle: "Protecting your brand, globally, from one centralised resource.",
    video: { ...heroVideo },
  },
};

export const getWhyMediaboxContent = async () => Promise.resolve(whyMediaboxContent);
