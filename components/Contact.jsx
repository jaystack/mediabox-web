import React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import "./Contact.scss";
import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("./MapContainer"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

function Contact({ className, variant, content, map }) {
  return (
    <>
      <div className={classnames("contact", className, variant)}>
        <div className="contact__inner">
          <div className={classnames("contact__contentColumn")}>
            {content && (
              <div className={classnames("contact__contentContainer")}>
                <div
                  className={classnames("contact__content")}
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              </div>
            )}
          </div>
          <div className={classnames("contact__mapColumn")}>
            {map && (
              <MapContainer
                className="contact__mapContainer"
                iframeClassName="contact__mapContainerIframe"
                x={map.x}
                y={map.y}
                zoom={map.zoom}
                popupHTML={map.popupHTML}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

Contact.defaultProps = {
  content: "",
  variant: [],
  className: "",
  map: null
};

Contact.propTypes = {
  content: PropTypes.string,
  map: PropTypes.object,
  variant: PropTypes.array,
  className: PropTypes.string,
};

export default Contact;
