import React from "react";
import * as PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import MediaBlock from "../components/MediaBlock";
import { getTestpageContent } from "../data/testpage";

export const getServerSideProps = async () => {
  const testpageContent = await getTestpageContent();
  return {
    props: {
      testpageContent,
    },
  };
};

function Test({ testpageContent }) {
  const { hero } = testpageContent;
  return (
    <div>
      <MediaBlock
        title={hero.title}
        subTitle={hero.subTitle}
        content={hero.content}
        asset={...hero.asset}
        variant="bottomDiagonal"
      />
    </div>
  );
}

export default Test;
