import React, { useState, useEffect, useRef } from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import Heading from "./Heading";
import "./MediaBlock.scss";

// TODO: SPLIT MediaBlock to MediaBlock, MediaBlockImage, MediaBlock video component
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
  const mediaRef = useRef();
  const videoRef = useRef();
  const imageRef = useRef();
  const [imageParallax, setImageParallax] = useState(0);

  useEffect(() => {
    const scrollListener = () => {
      // TODO: SPLIT MediaBlock to MediaBlock, MediaBlockImage, MediaBlock video component
      const scrollPos = window.pageYOffset || 0;
      if (asset?.assetType === "video") {
        const mediaHeight = mediaRef?.current?.clientHeight || 0;
        if (mediaHeight && scrollPos && videoRef?.current) {
          const ratio = scrollPos / mediaHeight;
          if (ratio !== 1) {
            if (ratio > 0.2) {
              if (!videoRef.current.paused) {
                videoRef.current.pause();
              }
            } else if (videoRef.current.paused) {
              videoRef.current.play();
            }
          }
        }
      }
      if (asset?.assetType === "image" && asset?.parallax && imageRef?.current) {
        const rect = mediaRef.current.getBoundingClientRect();
        const p = -rect.top * 0.4;
        if (imageParallax !== p) {
          requestAnimationFrame(() => {
            setImageParallax(p);
          });
        }
      }
    };

    // set resize listener
    window.addEventListener("scroll", scrollListener);
    // cleanup
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <>
      <div className={classnames("mediaBlock", className, variant)}>
        <div ref={mediaRef} className={classnames("mediaBlock__media")}>
          {asset?.assetType === "image" && (
            <img
              ref={imageRef}
              {...asset.img}
              className={classnames(asset?.img.className, "mediaBlock__image")}
              style={{
                transform: asset.parallax && `translateY(${imageParallax}px)`,
              }}
            />
          )}
          {asset?.assetType === "video" && (
            <video
              ref={videoRef}
              loop={true}
              autoPlay={true}
              muted={true}
              {...asset.video}
              className={classnames(
                asset?.video.className,
                "mediaBlock__video"
              )}
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
      {skiplink && <a id="content" />}
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
