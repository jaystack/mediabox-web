const aboutContent = {
  videoBanner: {
    title: "who are mediabox?",
    subTitle: "the driving force in an ever-changing digital landscape",
    content: "",
    variant: ["-smallerTitle"],
    asset: {
      assetType: "video",
      maskOpacity: 0.7,
      video: {
        autoPlay: true,
        loop: true,
      },
      source: {
        src: "/videos/video-header-for-about-us-x264_a0OuZyLC.compressed.mp4",
        type: "video/mp4",
      },
    },
  },
  hero: {
    title: "who are mediabox?",
    subTitle: "",
    variant: ["-bottomDiagonal", "-autoHeight"],
    content: `
    <p>MediaBox the company has a strong and passionate vision for MediaBox the product and that’s why we are building state of the art cutting edge technology to provide our customers with solutions to combat business challenges influenced by an ever-changing digital landscape.</p>
    <p>Behind the scenes there has been a huge investment both in monetary terms and time, strategically developing with industry expertise at every level.</p>
    <p>We strongly believe that existing and often historical practices can be vastly improved with an ease of use that will frighten nobody by appearing too complex and therefore difficult to embrace.</p>
    <p>The UI or user interface has been meticulously planned to appeal to all. It’s about visibility, being able to upload, tag, categorise, share, approve, download all digital assets combined within a range of easy to use features. The hard work is behind the scenes powered by the finest development techniques to ensure “functionality, speed of movement, access and control”.</p>
    <p>The company has industry specialists to ensure the product meets the requirement and can provide tangible business advantage and associated ROI.</p>
    <p>We have high level expertise in brand management, digital marketing, operations and IT, plus of course development specialists.</p>
    <p>The research has been done, the product journey developed and future proofed.</p>
    <p>MediaBox a truly modern-age way to manage and share digital assets and promote your brand. A new digital world solution.</p>
    <h2>mediaBox advanced digital asset and brand management software</h2>
    `,
    video: null,
    asset: {
      assetType: "image",
      parallax: false,
      img: {
        src: "/images/about/it-professional-removing-server_bg.jpg",
        alt: "",
      },
    },
  },
  actionBlock: {
    title: "START CENTRALISING, SHARING & PROMOTING YOUR ASSETS NOW",
    subTitle: "Protecting your brand, globally, from one centralised resource.",
  },
};

export const getAboutContent = async () => Promise.resolve(aboutContent);
