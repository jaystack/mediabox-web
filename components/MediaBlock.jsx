import React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";

import Heading from "./Heading";

import "./MediaBlock.scss";

// TODO: Image component, button component,

function MediaBlock({
  title,
  subTitle,
  content,
  asset,
  ctaButton,
  className,
  variant,
}) {
  return (
    <div className={classnames("mediaBlock", className, variant)}>
      <div className={classnames("mediaBlock__media")}>
        {asset && (
          <img
            className={classnames("mediaBlock__image")}
            src={asset.src}
            alt={asset.alt}
          />
        )}
      </div>
      <div className="mediaBlock__inner">
        <Heading level={1} className="mediaBlock__title">
          {title}
        </Heading>
        {subTitle && (
          <Heading level={2} className="mediaBlock__subTitle">
            {subTitle}
          </Heading>
        )}
        {content && (
          <div
            className="mediaBlock__content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
        {ctaButton && (
          <a href="mediaBlock__ctaButton" href={ctaButton.url}>
            <span>{ctaButton.icon}</span>
            {ctaButton.label}
          </a>
        )}
      </div>
    </div>
  );
}

MediaBlock.defaultProps = {
  subTitle: "",
  content: "",
  asset: {},
  ctaButton: {},
  variant: [],
  className: "",
};

MediaBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  content: PropTypes.string,
  asset: PropTypes.objectOf(PropTypes.string),
  ctaButton: PropTypes.objectOf(PropTypes.string),
  variant: PropTypes.array,
  className: PropTypes.string,
};

export default MediaBlock;
