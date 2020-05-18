import React from 'react';
import * as THREE from 'three';
import * as PropTypes from 'prop-types';

if (typeof window !== 'undefined') window.THREE = THREE;
import { EffectComposer, RenderPass } from 'postprocessing';

import { makeStyles } from '@material-ui/core/styles';
import { Detector } from '../lib/webGLDetector';
import TrackballControls from '../lib/TrackballControls';

const useStyles = makeStyles(theme => ({
  canvasHolder: {
    display: 'block',
    background: '#fafafa',
    // background: 'linear-gradient(329deg, rgba(162,184,192,1) 0%, rgba(134,159,168,1) 100%)',
  },
}));

const {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  PointLight,
  Mesh,
  BoxGeometry,
  MeshPhongMaterial,
  Color,
  BackSide,
  MeshBasicMaterial,
  TextureLoader
} = THREE;

export function CubeCanvas({ x, y, z, image }) {
  const classes = useStyles();
  const webGlEl = React.useRef(null);

  React.useEffect(() => {

    if (!Detector.webgl) {
      Detector.addGetWebGLMessage(webGlEl);
      return;
    }

    const imageLoader = new TextureLoader();

    const width  = webGlEl.current.clientWidth;
    const height = webGlEl.current.clientWidth;

    // Earth params
    const radius   = 0.5, segments = 128, rotation = 6;

    const scene = new Scene();

    const camera = new PerspectiveCamera(35, width / height, 0.01, 1000);
    // camera.position.x = -0.5;
    // camera.position.y = .5;
    camera.position.z = 1.5;

    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0xffffff, 0);
    renderer.setSize(width, height);

    scene.add(new AmbientLight(0xfdfdfd));

    const light = new PointLight(0xffffff, .85);
    light.position.set(-50,80,-10);
    scene.add(light);

    const sphere = createSphere(radius, segments);
    sphere.rotation.y = rotation + y;
    sphere.rotation.x = -0.85 + x;
    sphere.rotation.z = -0.35 + z;
    scene.add(sphere);

    // const clouds = createClouds(radius, segments);
    // clouds.rotation.y = rotation;
    // scene.add(clouds);

    // const stars = createStars(90, 64);
    // scene.add(stars);

    const controls = new TrackballControls(camera, webGlEl.current);
    controls.noZoom = true;
    controls.noPan = true;

    renderer.domElement.style.display = 'block';
    renderer.domElement.style.position = 'relative';

    webGlEl.current.appendChild(renderer.domElement);

    const renderPass = new RenderPass( scene, camera );

    // const bloomPass = new UnrealBloomPass( new THREE.Vector2( width, height ), 1.5, 0.4, 0.85 );
    // bloomPass.threshold = 0;
    // bloomPass.strength = 1.8;
    // bloomPass.radius = 0.05;

    const composer = new EffectComposer(renderer);
    composer.addPass( renderPass );
    // composer.addPass( fxaaPass );


    render();

    function render() {
      if (!webGlEl.current) return;
      controls.update();
      sphere.rotation.y += 0.001;
      sphere.rotation.x += 0.000125;
      sphere.rotation.z += 0.000125;
      light.position.copy(camera.position);
      // clouds.rotation.y += 0.0005;
      requestAnimationFrame(render);
      composer.render();
    }

    function createSphere(radius, segments) {
      return new Mesh(
        new BoxGeometry(radius, radius, radius),
        new MeshPhongMaterial({
          // color: '#083140',
          map: imageLoader.load(image),
          // bumpMap:     imageLoader.load('maze.svg'),
          // bumpScale:   0.1,
          // specularMap: imageLoader.load('images/water_4k.png'),
          // specular: new Color('white')
        })
      );
    }

    // function createClouds(radius, segments) {
    //   return new Mesh(
    //     new SphereGeometry(radius + 0.003, segments, segments),
    //     new MeshPhongMaterial({
    //       map: imageLoader.load('images/fair_clouds_4k.png'),
    //       transparent: true
    //     })
    //   );
    // }

    function createStars(radius, segments) {
      return new Mesh(
        new SphereGeometry(radius, segments, segments),
        new MeshBasicMaterial({
          map: imageLoader.load('images/galaxy_starfield.png'),
          side: BackSide
        })
      );
    }
  });


  return (<div ref={webGlEl} className={classes.canvasHolder} />)
}

CubeCanvas.defaultProps = {
  x: 0,
  y: 0,
  z: 0,
};

CubeCanvas.propTypes = {
  image: PropTypes.string.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
  z: PropTypes.number,
};
