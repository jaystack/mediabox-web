import React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import CollapsibleListItem from "./CollapsibleListItem";

import "./CollapsibleList.scss";

function CollapsibleList({ items, variant }) {
  return (
    <div className={classnames("collapsibleList", variant)}>
      <div className="collapsibleList__inner">
        {items.map((item, i) => (
          <CollapsibleListItem
            key={`collapsibleIt_${i}`}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

CollapsibleList.defaultProps = {
  items: [],
  variant: [],
};

CollapsibleList.propTypes = {
  items: PropTypes.array,
  variant: PropTypes.array,
};

export default CollapsibleList;
