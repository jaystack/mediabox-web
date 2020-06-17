import React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import "./Contact.scss";
import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("./MapContainer"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

function Contact({ className, variant, content }) {
  const position = [51.505, -0.09];
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
            <MapContainer
              className="contact__mapContainer"
              iframeClassName="contact__mapContainerIframe"
              x={51.53215}
              y={-0.09512}
              zoom={16}
              popupHTML={`<p>
                <strong>Mediabox Solutions Limited</strong>
                <br /> 20-22 Wenlock Road, London, N1 7G
              </p>`}
            />
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
};

Contact.propTypes = {
  content: PropTypes.string,
  variant: PropTypes.array,
  className: PropTypes.string,
};

export default Contact;
