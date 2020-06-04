import React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";

import "./CollapsibleListItem.scss";

function CollapsibleListItem({ title, content, variant }) {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(false);
  const [contentHeight, setContentHeight] = React.useState(0);
  const contentRef = React.useRef();

  const updateHeight = () => {
    const height = contentRef?.current?.clientHeight || 0;
    setContentHeight(height && height + 10);
  };

  const setMaxHeight = () => {
    const res =
      !open && transition ? 0 : contentHeight > 0 ? contentHeight + "px" : null;
    return res;
  };

  const handleClick = (e) => {
    if (!transition) {
      setTransition(true);
      setOpen(!open);
      if (open) {
        setTimeout(() => {
          setContentHeight(0);
          setTransition(false);
        }, 500); // Need to sync with the max-height transition duration value of the .collapsibleListItem__content css class.
      } else {
        updateHeight();
        setTimeout(() => {
          setTransition(false);
        }, 100);
      }
    }
  };

  return (
    <div className={classnames("collapsibleListItem", variant)}>
      <div onClick={handleClick} className="collapsibleListItem__title">
        <div className={classnames("collapsibleListItem__titleText")}>
          {title}
        </div>
        <div className={classnames("collapsibleListItem__toggleBtn")}>
          <span
            className={classnames(
              "collapsibleListItem__toggleIcon",
              open && "-open"
            )}
          />
        </div>
      </div>
      <div
        className={classnames(
          "collapsibleListItem__content",
          open && "-open",
          transition && "-transition"
        )}
        style={{ maxHeight: setMaxHeight() }}
        ref={contentRef}
      >
        <div
          className="collapsibleListItem__contentContainer"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
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
