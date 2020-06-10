import React, { useState, useEffect, useRef } from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import Heading from "./Heading";
import VideoPlayer from "./VideoPlayer";
import Button from "../components/Button";

import "./MediaBlock.scss";

// TODO: SPLIT MediaBlock to MediaBlock, MediaBlockImage, MediaBlock video component
function MediaBlock({
  title,
  subTitle,
  content,
  moreContent,
  moreContentButton,
  moreContentCloseButton,
  asset,
  ctaButton,
  icon,
  video,
  skiplink,
  className,
  variant,
}) {
  const mediaRef = useRef();
  const videoRef = useRef();
  const imageRef = useRef();
  const moreContentHeightRef = useRef();
  const [imageParallax, setImageParallax] = useState(0);
  const [moreContentHeight, setMoreContentHeight] = useState(0);

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
      <div
        className={classnames(
          "mediaBlock",
          className,
          variant,
          video && "-withVideo"
        )}
      >
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
          <div
            className="mediaBlock__mediaMask"
            style={{
              backgroundColor: asset?.maskColor || null,
              opacity: asset?.maskOpacity || null,
            }}
          />
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
          <div className="mediaBlock__contentContainer">
            {content && (
              <div className="mediaBlock__content">
                <div
                  className="mediaBlock__contentHeight"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            )}
            {moreContent && (
              <>
                {moreContentHeight === 0 && (
                  <div
                    onClick={() => {
                      const height =
                        moreContentHeightRef.current.clientHeight + 40;
                      setMoreContentHeight(height);
                    }}
                    className="mediaBlock__moreContentButton"
                    dangerouslySetInnerHTML={{ __html: moreContentButton }}
                  />
                )}
                <div
                  className="mediaBlock__moreContent"
                  style={{ maxHeight: `${moreContentHeight}px` }}
                >
                  <div
                    ref={moreContentHeightRef}
                    className="mediaBlock__moreContentHeight"
                    dangerouslySetInnerHTML={{ __html: moreContent }}
                  />
                </div>
                {moreContentHeight > 0 && (
                  <div
                    onClick={() => {
                      setMoreContentHeight(0);
                    }}
                    className="mediaBlock__moreContentCloseButton"
                    dangerouslySetInnerHTML={{ __html: moreContentCloseButton }}
                  />
                )}
              </>
            )}
          </div>

          {ctaButton?.label && (
            <div className="mediaBlock__ctaButtonContainer">
              <Button
                url={ctaButton.url}
                text={ctaButton.label}
                variant={ctaButton.variant}
              />
            </div>
          )}
          {video && (
            <div className="mediaBlock__videoPlayerContainer">
              <VideoPlayer
                type={video.type}
                videoId={video.videoId}
                buttonLabel={video.buttonLabel}
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
  moreContent: "",
  moreContentButton: "more...",
  moreContentCloseButton: "less...",
  asset: {},
  ctaButton: null,
  skiplink: false,
  icon: "",
  video: null,
  variant: [],
  className: "",
};

MediaBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  content: PropTypes.string,
  moreContent: PropTypes.string,
  moreContentButton: PropTypes.string,
  moreContentCloseButton: PropTypes.string,
  asset: PropTypes.object,
  ctaButton: PropTypes.objectOf(PropTypes.string),
  skiplink: PropTypes.bool,
  icon: PropTypes.string,
  video: PropTypes.object,
  variant: PropTypes.array,
  className: PropTypes.string,
};

export default MediaBlock;
