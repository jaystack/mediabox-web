const heroVideo = {
  type: "vimeo",
  videoId: "336368135",
  buttonLabel: "VIEW A DEMO",
};
const brandContent = {
  videoBanner: {
    title: "“brand is the foundation upon which marketing is built.”",
    subTitle:
      "brand equity is one of the few assets in business that can provide a sustainable and competitive advantage",
    content: "",
    variant: ["-cropVideoTopBorder"],
    asset: {
      assetType: "video",
      maskOpacity: 0.65,
      video: {
        autoPlay: true,
        loop: true,
      },
      source: {
        src: "/videos/brand-homepage-header-video.mp4",
        type: "video/mp4",
      },
    },
  },
  hero: {
    title: "delivering a consistent brand experience",
    subTitle: "",
    content: `
    <div class="imageColumn">
      <div>
        <img src="images/brand/brand1.svg" alt="">
        <div>Organise</div>
      </div>
      <div>
        <img src="images/brand/brand2.svg" alt="">
        <div>Centralise</div>
      </div>
      <div>
        <img src="images/brand/brand3.svg" alt="">
        <div>Search</div>
      </div>
      <div>
        <img src="images/brand/brand4.svg" alt="">
        <div>Distribute</div>
      </div>
    </div>
    <p>The more successful the company and its marketing organisation is in presenting a consistent, compelling, informative brand, the greater the likelihood of sales success. The equation is simple; enforcing it is not.</p>
    <p>Mobilising your brand with MediaBox will increase sales and marketing opportunities because without rigourous standards and controls, a company’s brand can be diluted, leading to customer confusion and lost business. As a result, most companies implement rigid, highly manual and centralised marketing practices</p>
    <p>Marketing Automation (MAM) can steward the brand control process, whilst also empower the end users (corporate, networks, and field marketers, agencies) who are ultimately responsible for facilitating the brand’s regional and worldwide product sales and promotions.</p>
    `,
    moreContent: `
    <p>Corporate marketers are focused on enforcing brand conformity, but local marketers want marketing programs that will drive sales for their location or business. They want the ability and autonomy to react quickly to initiate campaigns taking into account local market tastes and requirements with a swift brand approval process.</p>
    <p>Corporate Marketing enjoy huge internal process improvement with reduced costs and improved revenue generation potential, as marketing is able to focus all of its energies on promoting versus. protecting the brand.</p>
    <p>Equally important is that marketing departments can leverage all asset types housed in MediaBox across all media channels. And reporting systems can be used to track usage and help determine ROI.</p>
    <p>It’s compliant, enabling marketing managers to deliver a consistent brand experience, ensuring each brand ambassador has at his or her disposal all the brand assets, new, old, approved, or editable, required to promote, and prosper.</p>
    `,
    moreContentButton: `<p>more...</p>`,
    moreContentCloseButton: `<p>less...</p>`,
    video: { ...heroVideo },
    variant: ["-autoHeight", "-lightHeader", "-brandImage", "-bottomDiagonal"],
    asset: {
      maskOpacity: 0.8,
      assetType: "image",
      parallax: false,
      img: {
        src: "/images/whyMediabox/Happy_staff_deliver_brandconsistency.jpg",
        alt: "",
      },
    },
  },
  brandArticle: {
    title: "brand management",
    subTitle: "",
    icon: "cogs",
    variant: ["-autoHeight", "-whiteTheme", "-bottomDiagonal", "-narrowTitle", "-inlineListItem"],
    ctaButton: {
      label: "SPEAK TO US",
      url: "/Contanct/",
      variant: ["-buttonLg"],
    },
    content: `
    <p>MediaBox delivers full control and management over the lifecycle of your digital assets, from creation to archive.</p>
    <p><strong>Turbocharge how your team operates.</strong></p>
    <ul>
      <li>ONE TOOL</li>
      <li>ONE RESOURCE</li>
      <li>COMPLETE CONTROL</li>
    </ul>
    <p>Our unique asset management software caters for video, images, documentation and multimedia whilst allowing for intuitive file organisation alongside a detailed search functionality.</p>
    `,
    image: {
      src: "images/brand/xxBrand-managementoptimized.jpg.pagespeed.ic.VSHBiXcR6i.jpg",
      alt: "",
    },
  },

  actionBlock: {
    title: "START CENTRALISING, SHARING & PROMOTING YOUR ASSETS NOW",
    subTitle: "Protecting your brand, globally, from one centralised resource.",
    video: { ...heroVideo },
  },
};

export const getBrandContent = async () => Promise.resolve(brandContent);
