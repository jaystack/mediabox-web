const digitalAssetManagementContent = {
  videoBanner: {
    title: "digital asset management",
    subTitle:
      "full control and management over the lifecycle of your digital assets",
    variant: ["-mediaMaskOpacity065"],
    content: "",
    asset: {
      assetType: "video",
      video: {
        autoPlay: true,
        loop: true,
      },
      source: {
        src:
          "/videos/digital-asset-management-background-header-video_EA0DHZwH.compressed.mp4",
        type: "video/mp4",
      },
    },
  },

  multimediaArticle: {
    title: "image, video and multimedia",
    subTitle: "",
    icon: "files-o",
    variant: ["-autoHeight", "-whiteTheme", "-topDiagonal"],
    content: `<p>Centralised cloud-based storage coupled with powerful metadata driven search tools mean you’ll never again be stuck searching for a critical asset.</p>
    <p>Promote best practice and maximise your digital investments across multiple teams, sites and territories to amplify creative opportunities whilst maintaining asset integrity with top-down control.</p>
    <p>Store, process, and playback all of your assets in any file type within MediaBox itself, meaning you won’t have to download every video you wish to preview.</p>`,
    image: {
      src: "images/digitalAssetManagement/Image_video_multimedia.png",
      alt: "",
    },
  },

  documentManagementArticle: {
    title: "document management",
    subTitle: "",
    icon: "files-o",
    variant: ["-autoHeight", "-topDiagonal", "-bottomDiagonal"],
    content: `<p>Store instructions, copy, briefs, and proposals right alongside your multimedia assets. Never again dig for buried documents relating to your work, MediaBox stores all associated files with the images, videos, or audio to which they relate.</p>
    <p>Make use of efficient, centralised storage to allow for the collaboration with colleagues and clients across the world.</p>`,
    image: {
      src: "images/digitalAssetManagement/Document_Management.png",
      alt: "",
    },
  },

  organiseArticle: {
    title: "organise",
    subTitle: "",
    icon: "folder-open-o",
    variant: ["-autoHeight", "-whiteTheme", "-tallArticleListItem"],
    content: `<p>Organise your digital assets with a clear and easy to follow folder structure built to suit your needs.</p>
    <ul>
      <li>Ingest in bulk</li>
      <li>Metadata tagging</li>
      <li>Sophisticated search capabilities</li>
    </ul>`,
    image: {
      src:
        "images/digitalAssetManagement/ORGANISE_CUBE_digital-asset-management-page.png",
      alt: "",
    },
  },

  manageAndMonitorArticle: {
    title: "manage and monitor",
    subTitle: "",
    icon: "headphones",
    variant: ["-autoHeight", "-whiteTheme"],
    content: `<p>Stay in control with granular permission settings and usage reports.</p>
    <p>Easy setup of viewing permissions and asset downloads combined with clear usage reporting, ensures compliance whilst highlighting levels of ongoing activity.</p>
    <ul>
      <li>Access management ensuring download approval</li>
      <li>Permissions control</li>
      <li>Transparency</li>
      <li>Usage reports</li>
      <li>Automate watermarking for images</li>
    </ul>`,
    image: {
      src:
        "images/digitalAssetManagement/MANAGE-MONITOR-digital-asset-management-page.png",
      alt: "",
    },
  },

  permissionsArticle: {
    title: "permissions",
    subTitle: "",
    icon: "user-o",
    variant: ["-autoHeight", "-whiteTheme", "-darkArticleBullet"],
    content: `<p>Bespoke permissions and access controls gives you confidence in the knowledge that your colleagues, clients, or third party organisations, can only see the digital assets you want them to, and only the power to use them, the way you want them to.</p>
    <ul>
      <li>Secure downloads</li>
      <li>Permission controls</li>
      <li>Usage reports</li>
      <li>Your assets safely shared</li>
    </ul>`,
    image: {
      src:
        "images/digitalAssetManagement/MB-permissions-HOMEPAGE-FINAL800px.png",
      alt: "",
    },
  },

  securityArticle: {
    title: "security",
    subTitle: "",
    icon: "lock",
    variant: ["-autoHeight", "-topDiagonal"],
    content: `<p>In a digital age where brand infringement and IP exploitation is at an all-time high, protecting your brand should be at the top of the agenda.</p>
    <p>At MediaBox we implement extensive security measures to protect your data not only within your organisation, but from external threats to MediaBox too. In an ideal world, there would be no online threats to our data, however our experienced team work around the clock to prevent data breaches and protect your digital assets.</p>
    <p>Ensure your digital assets are secure, and protected, with the MediaBox advanced digital asset management suite.</p>`,
    image: {
      src:
        "images/digitalAssetManagement/BRAND-SECURITY_digital-asset-management_1.png",
      alt: "",
    },
  },

  concludingArticle: {
    title:
      "Leaving you to focus on promoting your brand with confidence, using the MediaBox integrated Digital Asset Management Suite.",
    subTitle:
      "MediaBox is a new technology designed to give you back the control of your digital assets and in doing so, reduce counterfeiting, IP infringement and brand abuse.",
    icon: "",
    variant: [
      "-autoHeight",
      "-bottomDiagonal",
      "-longTitleText",
      "-blueBackground",
    ],
  },

  actionBlock: {
    title: "START CENTRALISING, SHARING & PROMOTING YOUR ASSETS NOW",
    subTitle: "Protecting your brand, globally, from one centralised resource.",
    video: {
      type: "vimeo",
      videoId: "336368135",
      buttonLabel: "VIEW A DEMO",
    },
  },
};

export const getDigitalAssetManagementContent = async () =>
  Promise.resolve(digitalAssetManagementContent);
