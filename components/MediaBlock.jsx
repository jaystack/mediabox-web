import React, { useState, useEffect, useRef } from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import Heading from "./Heading";
import Button from "../components/Button";
import "./MediaBlock.scss";

// TODO: SPLIT MediaBlock to MediaBlock, MediaBlockImage, MediaBlock video component
function MediaBlock({
  title,
  subTitle,
  content,
  asset,
  ctaButton,
  icon,
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
      if (asset?.assetType === "video") {
        if (videoRef?.current && mediaRef?.current) {
          const LIMIT = 200;
          const rect = mediaRef.current.getBoundingClientRect();
          const play =
            rect.top + LIMIT > 0 && rect.top + LIMIT < window.innerHeight;
          if (play && videoRef.current.paused) {
            videoRef.current.play();
          }
          if (!play && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      }
      if (
        asset?.assetType === "image" &&
        asset?.parallax &&
        imageRef?.current
      ) {
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
          {ctaButton?.label && (
            <div className="mediaBlock__ctaButtonContainer">
              {/* TODO: display ctaButton.icon in the button */}
              <span>{ctaButton.icon}</span>
              <Button
                url="ctaButton.url"
                text={ctaButton.label}
                variant={ctaButton.variant}
              />
            </div>
          )}
          {skiplink && (
            <a className="mediaBlock__skipLink" href="#content">
              <i className="fa fa-angle-down" />
            </a>
          )}
        </div>
        {icon && (
          <i className={classnames("mediaBlock__icon", "fa", `fa-${icon}`)} />
        )}
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
  icon: "",
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
  icon: PropTypes.string,
  variant: PropTypes.array,
  className: PropTypes.string,
};

export default MediaBlock;
