import React from "react";
import * as PropTypes from "prop-types";

function MapContainer({ height }) {
  React.useEffect(() => {}, []);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<iframe width="870" height="${height}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="leafletMap.html" style="border: none"></iframe>`,
      }}
    />
  );
}

MapContainer.defaultProps = {
  height: 900,
};

MapContainer.propTypes = {
  height: PropTypes.number,
};

export default MapContainer;
