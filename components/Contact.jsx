import React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import "./Contact.scss";
import dynamic from 'next/dynamic';
const MapContainer = dynamic(() => import('./MapContainer'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

function Contact({ className, variant, content }) {
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
            <MapContainer />
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
