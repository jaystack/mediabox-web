import React, { useState, useEffect, useRef } from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import Heading from "./Heading";
import VideoPlayer from "./VideoPlayer";
import Link from "next/link";

import "./ActionBlock.scss";

function ActionBlock({ title, subTitle, className, variant, video }) {
  const mediaRef = useRef();
  const videoRef = useRef();
  const imageRef = useRef();
  const [imageParallax, setImageParallax] = useState(0);

  useEffect(() => {
    const scrollListener = () => {};

    // set resize listener
    window.addEventListener("scroll", scrollListener);
    // cleanup
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className={classnames(variant, className, "actionBlock")}>
      <div className="actionBlock__inner">
        <Heading level={1} className="actionBlock__title">
          {title}
        </Heading>
        {subTitle && (
          <Heading level={2} className="actionBlock__subTitle">
            {subTitle}
          </Heading>
        )}
        <div className="actionBlock__cardContainer">
          <div className="actionBlock__card cardVideo">
            <div className="actionBlock__cardTitle">watch our demo</div>
            <div className="actionBlock__cardButton">
              <div className="actionBlock__videoPlayerContainer">
                {video && (
                  <VideoPlayer
                    type={video.type}
                    videoId={video.videoId}
                    buttonLabel={video.buttonLabel}
                    simpleButton={true}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="actionBlock__card liveDemo">
            <div className="actionBlock__cardTitle">book a live demo</div>
            <div className="actionBlock__cardButton">
              <Link href={""}>
                <a className="button__link">
                  Book Demo{" "}
                  <div className="actionBlock__cardButtonIcon -cardButtonIconBlue">
                    <i className="fa fa-angle-right"></i>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="actionBlock__card speakTo">
            <div className="actionBlock__cardTitle">speak to the team</div>
            <div className="actionBlock__cardButton">
              <Link href={"/contact/"}>
                <a className="button__link">
                  Contact Us{" "}
                  <div className="actionBlock__cardButtonIcon">
                    <i className="fa fa-angle-right"></i>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ActionBlock.defaultProps = {
  subTitle: "",
  variant: [],
  video: null,
};

ActionBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  className: "",
  className: PropTypes.string,
  variant: PropTypes.array,
  video: PropTypes.object,
};

export default ActionBlock;
