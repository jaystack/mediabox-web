import React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";

import "./CollapsibleList.scss";


function CollapsibleList({ items, variant }) {
  
  return (
    <div className={classnames("collapsibleList", variant)}>
      <div className="collapsibleList__inner">
        {items.map((item, i) => {
          return (
            <div className="collapsibleList__item" key={`collapsibleIt_${i}`}>
              <div className="collapsibleList__itemTitle">
                <div className={classnames("collapsibleList__itemTitleText")}>{item.title}</div>
                <div className={classnames("collapsibleList__itemToggleBtn")}>
                  <i
                    className={classnames(
                      "collapsibleList__itemToggleIcon",
                      "icon-plus-sign"
                    )}
                    style={{ width: "32px", height: "32px" }}
                  >
                    +
                  </i>
                </div>
              </div>

              <div
                className={classnames(
                  "collapsibleList__itemContent",
                  item.classNames
                )}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

CollapsibleList.defaultProps = {
  items: [],
  variant: "",
};

CollapsibleList.propTypes = {
  items: PropTypes.array,
  variant: PropTypes.array,
};

export default CollapsibleList;
