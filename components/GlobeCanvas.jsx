import React from 'react';
import * as THREE from 'three';
if (typeof window !== 'undefined') window.THREE = THREE;
import { ShaderPass, EffectComposer, RenderPass, SMAAEffect, BloomEffect } from 'postprocessing';
import fxaa from 'three-shader-fxaa';
import {makeStyles} from '@material-ui/core/styles';
import {Detector} from '../lib/webGLDetector';

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
  DirectionalLight,
  Mesh,
  SphereGeometry,
  MeshPhongMaterial,
  Color,
  BackSide,
  MeshBasicMaterial,
  TextureLoader
} = THREE;

export function GlobeCanvas(props) {
  const classes = useStyles();
  const webGlEl = React.useRef(null);

  React.useEffect(() => {

    document.body.style.margin = 0;

    if (!Detector.webgl) {
      Detector.addGetWebGLMessage(webGlEl);
      return;
    }

    const imageLoader = new TextureLoader();

    const width  = window.innerWidth;
    const height = window.innerHeight;

    // Earth params
    const radius   = 0.5, segments = 128, rotation = 6;

    const scene = new Scene();

    const camera = new PerspectiveCamera(35, width / height, 0.01, 1000);
    // camera.position.x = -0.5;
    camera.position.y = .5;
    camera.position.z = 1.2;

    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0xffffff, 0);
    renderer.setSize(width, height);

    scene.add(new AmbientLight(0xfdfdfd));

    const light = new DirectionalLight(0xffffff, 0.05);
    light.position.set(-100,120,1);
    scene.add(light);

    const sphere = createSphere(radius, segments);
    sphere.rotation.y = rotation;
    sphere.rotation.x = -0.85;
    sphere.rotation.z = -0.25;
    scene.add(sphere);

    // const clouds = createClouds(radius, segments);
    // clouds.rotation.y = rotation;
    // scene.add(clouds);

    // const stars = createStars(90, 64);
    // scene.add(stars);

    // var controls = new THREE.TrackballControls(camera);

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
      // controls.update();
      sphere.rotation.y += 0.0005;
      // sphere.rotation.x += 0.000125;
      // clouds.rotation.y += 0.0005;
      requestAnimationFrame(render);
      composer.render();
    }

    function createSphere(radius, segments) {
      return new Mesh(
        new SphereGeometry(radius, segments, segments),
        new MeshPhongMaterial({
          map:         imageLoader.load('images/world-map.png'),
          // bumpMap:     imageLoader.load('images/elev_bump_4k.jpg'),
          // bumpScale:   0.005,
          specularMap: imageLoader.load('images/water_4k.png'),
          specular:    new Color('white')
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
