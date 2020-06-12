import React from "react";

import { getContactContent } from "../data/contact";
import MediaBlock from "../components/MediaBlock";
import Contact from "../components/Contact";

export const getServerSideProps = async () => {
  const content = await getContactContent();
  return {
    props: {
      content: content,
    },
  };
};

function DigitalAssetManagement({ content }) {
  const { imageBanner, contactComponent } = content;
  return (
    <>
      <MediaBlock {...imageBanner} skiplink />
      <Contact {...contactComponent} />
    </>
  );
}

export default DigitalAssetManagement;
