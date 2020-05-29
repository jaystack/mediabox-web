const testpageContent = {
  hero: {
    title: "kék",
    subTitle: "nemkék",
    content: "<p>Kékaz!</p>",
    asset: {
      src: "/images/elev_bump_4k.jpg",
      alt: "",
    },
  },
};

export const getTestpageContent = async () => Promise.resolve(testpageContent);
