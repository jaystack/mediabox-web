import React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";

function MapContainer({ className, iframeClassName, x, y, zoom, popupHTML }) {
  React.useEffect(() => {}, []);

  const classAttr = iframeClassName ? ' class="' + iframeClassName + '"' : "";
  const data = {
    x,
    y,
    zoom,
    popupHTML,
  };
  const dataAttribs = Object.keys(data)
    .map((key) => `data-${key}="${data[key]}"`)
    .join(" ");

  return (
    <div
      className={classnames("contact__mapContainer", className)}
      dangerouslySetInnerHTML={{
        __html: `<iframe${classAttr} ${dataAttribs ||
          ""} width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="leafletMap.html"></iframe>`,
      }}
    />
  );
}

MapContainer.defaultProps = {
  className: "",
  iframeClassName: "",
  x: "",
  Y: "",
  zoom: "",
};

MapContainer.propTypes = {
  className: PropTypes.string,
  iframeClassName: PropTypes.string,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  popupHTML: PropTypes.string,
};

export default MapContainer;
