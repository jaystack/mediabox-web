import React, { useState, useEffect, useRef } from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";

import Vimeo from '@u-wave/react-vimeo';

import "./VideoPlayer.scss";

function VideoPlayer({
  type,
  videoId,
  buttonLabel,
  variant,
  className
}) {
  const [open, setOpen] = useState(false);

  const handleVideoOpen = () => {
    setOpen(true);
    document.body.classList.toggle('videoPlayerOpen', !open);
  };

  const handleVideoClose = () => {
    setOpen(false);
    document.body.classList.toggle('videoPlayerOpen', !open);
  };

  return (
    <>
      <button
        className={classnames("videoPlayButton", className, variant)}
        onClick={() => handleVideoOpen(true)}
      >{buttonLabel}</button>
      {open && (
        <div className={classnames("videoPlayer", className, variant)}>
          <div className="videoPlayer__inner">
            <div className="videoPlayer__player">
              {type === "vimeo" && (
                <Vimeo
                  video={videoId}
                  autoplay
                  className="videoPlayer__video"
                />
              )}
              <button
                className={classnames("videoPlayer__closeButton", className, variant)}
                onClick={() => handleVideoClose(false)}
              ><span className="videoPlayer__close" /><span className="srOnly">Close video</span></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

VideoPlayer.defaultProps = {
  type: "vimeo",
  videoId: "",
  buttonLabel: "Watch video",
  variant: [],
  className: "",
};

VideoPlayer.propTypes = {
  type: PropTypes.string,
  videoId: PropTypes.string,
  buttonLabel: PropTypes.string,
  variant: PropTypes.array,
  className: PropTypes.string,
};

export default VideoPlayer;
