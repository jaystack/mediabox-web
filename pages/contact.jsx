import React from "react";

import { getContactContent } from "../data/contact";
import MediaBlock from "../components/MediaBlock";
import ContactComponent from "../components/Contact";

export const getServerSideProps = async () => {
  const content = await getContactContent();
  return {
    props: {
      content: content,
    },
  };
};

function Contact({ content }) {
  const { imageBanner, contactComponentData } = content;
  return (
    <>
      <MediaBlock {...imageBanner} skiplink />
      <ContactComponent {...contactComponentData} />
    </>
  );
}

export default Contact;
