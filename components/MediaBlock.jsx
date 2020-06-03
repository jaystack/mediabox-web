import React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import Heading from "./Heading";
import "./MediaBlock.scss";

function MediaBlock({
  title,
  subTitle,
  content,
  asset,
  ctaButton,
  skiplink,
  className,
  variant,
}) {
  return (
    <>
      <div className={classnames("mediaBlock", className, variant)}>
        <div className={classnames("mediaBlock__media")}>
          {asset?.assetType === "image" && (
            <img
              className={classnames("mediaBlock__image")}
              src={asset.src}
              alt={asset.alt}
            />
          )}
          {asset?.assetType === "video" && (
            <video
              loop={true}
              autoPlay={true}
              muted={true}
              {...asset.video}
              className={classnames(asset?.video.className, "mediaBlock__video")}
            >
              <source {...asset.source} />
            </video>
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
          {skiplink && (
            <a className="mediaBlock__skipLink" href="#content">
              <i className="fa fa-angle-down" />
            </a>
          )}
        </div>
      </div>
      {skiplink && (
        <a id="content" />
      )}
    </>
  );
}

MediaBlock.defaultProps = {
  subTitle: "",
  content: "",
  asset: {},
  ctaButton: {},
  skiplink: false,
  variant: [],
  className: "",
};

MediaBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  content: PropTypes.string,
  asset: PropTypes.object,
  ctaButton: PropTypes.objectOf(PropTypes.string),
  skiplink: PropTypes.bool,
  variant: PropTypes.array,
  className: PropTypes.string,
};

export default MediaBlock;
