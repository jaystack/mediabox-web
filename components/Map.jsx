import React from 'react';
import ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import MapBox from 'mapbox-gl';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import useTheme from '@material-ui/core/styles/useTheme';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';

MapBox.accessToken = 'pk.eyJ1Ijoic3N1dHRvbiIsImEiOiJja2E4NWFsangwNWVrMnhzOTlnZ2t3NW94In0.qVCRsWNkANus2MOF2WbaSg';

const centerAnim = {
  transformOrigin: '50% 50%',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
};

const useStyles = makeStyles(theme => ({
  mapContainer: {
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
  mapMarker: {
    width: 20,
    height: 20,
    position: 'relative',
  },
  mapMarkerCenter: {
    width: 16,
    height: 16,
    borderRadius: 30,
    position: 'absolute',
    left: 2,
    top: 2,
    ...centerAnim,
  },
  signalBase: {
    width: 180,
    height: 180,
    pointerEvents: 'none',
    borderRadius: 200,
    position: 'absolute',
    left: -80,
    top: -80,
    opacity: 0,
    animation: '$signal cubic-bezier(0,.55,.55,1) 2s',
    ...centerAnim,
  },
  signalOne: {
    animationDelay: '700ms',
  },
  signalTwo: {
    animationDelay: '1s',
  },
  topLeft: {
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 10,
  },
  '@keyframes signal': {
    '0%': { opacity:0, transform: 'scale(0)' },
    '1%': { opacity:0.25 },
    '20%': { opacity:0.25 },
    '60%': { opacity: 0, transform: 'scale(1)' },
  },
  '@keyframes signal2': {
    '0%': { opacity:0 },
    '1%': { opacity:0.2 },
    '20%': { opacity:0.17 },
    '60%': { opacity:0 },
  }
}));

function MapMarker({ color }) {
  const classes = useStyles();
  const theme = useTheme();
  const backgroundColor = color || theme.palette.primary.main;
  return <div className={classes.mapMarker}>
    <div className={classes.mapMarkerCenter} style={{backgroundColor}} />
    <div className={clsx(classes.signalBase, classes.signalOne)} style={{backgroundColor}} />
    <div className={clsx(classes.signalBase, classes.signalTwo)} style={{backgroundColor}} />
  </div>
}

MapMarker.propTypes = {
  color: PropTypes.string,
};

function Map() {
  const classes = useStyles();
  const theme = useTheme();
  const mapContainer = React.useRef(null);
  const mapRef = React.useRef();

  const originalLngLat = [-0.095120, 51.532150];
  const [mapState, setMapState] = React.useState({
    lng: originalLngLat[0],
    lat: originalLngLat[1],
    zoom: 13,
  });

  const flyToCenter = () => mapRef.current?.flyTo({ center: originalLngLat });
  const updateMapState = () => setMapState({
    lng: mapRef.current?.getCenter().lng,
    lat: mapRef.current?.getCenter().lat,
    zoom: mapRef.current?.getZoom().toFixed(2)
  });

  const shouldDisplayReturnButton = () => {
    return mapState.lng.toFixed(6) !== originalLngLat[0].toFixed(6)
      || mapState.lat.toFixed(6) !== originalLngLat[1].toFixed(6);
  };

  const staticHQ = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: originalLngLat,
      },
      properties: {
        title: 'MediaBox',
        description: 'London'
      }
    }],
  };

  React.useEffect(() => {
    const { lng, lat, zoom } = mapState;
    const map = new MapBox.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/ssutton/cka86oay5009a1jpd7rvzmxqk',
      center: [lng, lat],
      zoom,
    });

    const placeholder = document.createElement('div');
    ReactDOM.render(<MapMarker color={theme.palette.secondary.main}/>, placeholder);

    new MapBox.Marker(placeholder)
      .setLngLat(staticHQ.features[0].geometry.coordinates)
      .addTo(map);

    mapRef.current = map;

    mapRef.current.on('move', updateMapState);
    mapRef.current.on('moveend', updateMapState);

  }, []);

  return (
    <React.Fragment>
      <div className={classes.topLeft}>
        <Grow in={shouldDisplayReturnButton()}>
          <Button variant="contained" color="secondary" onClick={flyToCenter}>
            Recenter
          </Button>
        </Grow>
      </div>
      <div ref={mapContainer} className={classes.mapContainer} />
    </React.Fragment>
  );
}

export default Map;
