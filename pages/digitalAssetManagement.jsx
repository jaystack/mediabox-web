import React from "react";

import { getDigitalAssetManagementContent } from "../data/digitalAssetManagement";
import MediaBlock from "../components/MediaBlock";
import ActionBlock from "../components/ActionBlock";
import Article from "../components/Article";

export const getServerSideProps = async () => {
  const content = await getDigitalAssetManagementContent();
  return {
    props: {
      content: content,
    },
  };
};

function DigitalAssetManagement({ content }) {
  const {
    videoBanner,
    multimediaArticle,
    documentManagementArticle,
    organiseArticle,
    manageAndMonitorArticle,
    permissionsArticle,
    securityArticle,
    concludingArticle,
    actionBlock,
  } = content;
  return (
    <>
      <MediaBlock {...videoBanner} skiplink />
      <Article {...multimediaArticle} />
      <Article {...documentManagementArticle} />
      <Article {...organiseArticle} />
      <Article {...manageAndMonitorArticle} />
      <Article {...permissionsArticle} />
      <Article {...securityArticle} />
      <MediaBlock {...concludingArticle} />
      <ActionBlock {...actionBlock} />
    </>
  );
}

export default DigitalAssetManagement;
