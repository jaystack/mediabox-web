import React, { useState } from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";

import "./CollapsibleListItem.scss";

function CollapsibleListItem({ title, content, variant }) {
  const [open, setOpen] = React.useState(null);
  return (
    <div className={classnames("collapsibleListItem", variant)}>
      <div
        onClick={(e) => {
          setOpen(!open);
        }}
        className="collapsibleListItem__title"
      >
        <div className={classnames("collapsibleListItem__titleText")}>
          {title}
        </div>
        <div className={classnames("collapsibleListItem__toggleBtn")}>
          <i
            className={classnames(
              "collapsibleListItem__toggleIcon"
              // "icon-plus-sign" !TODO
            )}
            style={{ width: "32px", height: "32px", textAlign: 'center' }} // TODO
          >
            {open ? "-" : "+"}
          </i>
        </div>
      </div>
      <div
        className={classnames("collapsibleListItem__content", open && "-open")}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

CollapsibleListItem.defaultProps = {
  title: "",
  content: "",
  variant: [],
};

CollapsibleListItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  variant: PropTypes.array,
};

export default CollapsibleListItem;
