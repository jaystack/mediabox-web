import React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import "./Contact.scss";

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
          <div className={classnames("contact__mapColumn")}>MAP</div>
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
