import React from 'react';
import PaperJS, { Path } from 'paper';
import TinyColor from 'tinycolor2';
import useTheme from '@material-ui/core/styles/useTheme';

const getSVG = url => new Promise(resolve => PaperJS.project.importSVG(url, resolve));

function HomeIllustration() {
  const theme = useTheme();
  const canvasRef = React.useRef(null);
  const configureCanvas = () => {
    PaperJS.setup(canvasRef.current);

    const path = new Path.Circle({
      center: PaperJS.view.center,
      radius: PaperJS.view.size.width * 0.4,
    });

    function createTriangle() {
      const triangle = new Path.RegularPolygon(PaperJS.view.center, 3, PaperJS.view.size.width / 100);
      triangle.applyMatrix = false;
      triangle.pivot = triangle._segments[1]._point;
      return triangle;
    }

    const triangles = [...new Array(64)].map(createTriangle);

    const centralCircle = new Path.Circle({
      center: PaperJS.view.center,
      radius: PaperJS.view.size.width / 4,
      fillColor: '#333334',
    });

    const prepareLogo = async () => {
      const logo = await getSVG('/mediabox-darkbg.svg');
      logo.scale(0.07);
      logo.position = centralCircle.bounds.center;
    };

    prepareLogo();

    function createSectionCircle(el, i, arr) {
      const center = path.getPointAt(
        getNormalisedProgress((path.length / 4) + ((path.length / arr.length) * i))
      );
      const circle = new Path.Circle({
        center,
        radius: PaperJS.view.size.width / 12,
        fillColor: el.color,
      });
      const text = new PaperJS.PointText({
        position: new PaperJS.Point(circle.bounds.center.x, circle.bounds.center.y + 17),
        justification: 'center',
        content: el.initial,
        fillColor: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 48
      });
      text.pivot = text.bounds.center;
    }

    const lettersRaw = [
      { initial: 'A', color: '#209ac3' },
      { initial: 'B', color: '#262626' },
      { initial: 'C', color: '#a1b8bf' },
      { initial: 'D', color: '#262626' },
      { initial: 'E', color: '#a1b8bf' }
    ];
    lettersRaw.forEach(createSectionCircle);

    function onFrame(event) {
      const slowness = 3000;
      const time = event.count % slowness / slowness;
      updateTriangles(time);
    }

    function getNormalisedProgress(progress) {
      return progress / path.length > 1
        ? progress - (path.length / Math.floor(progress / path.length))
        : progress;
    }

    function getScalingTransformer(progress, shouldLog) {
      const oneFifth = path.length / 5;
      const fifthsInNewProgress = progress / oneFifth;
      return fifthsInNewProgress > 1
        ? fifthsInNewProgress - Math.floor(fifthsInNewProgress)
        : fifthsInNewProgress;
    }

    function updateTriangles(time) {
      const oneSection = path.length / triangles.length;
      triangles.forEach((t, i) => {

        const oneFifth = path.length / 5;
        const progress = (time * path.length) + (i * oneSection);
        const scaleProgress = (time * path.length) + (oneFifth / 1.4) + (i * oneSection);
        const whichFifth = Math.floor(progress / oneFifth) % 5;

        const offset = getNormalisedProgress(progress);
        const point = path.getPointAt(offset);
        const tangent = path.getTangentAt(offset);

        t.position = point;
        t.rotation = 90 + tangent.angle;
        t.scaling =  1 + Math.abs(-.5 + getScalingTransformer(scaleProgress));
        t.fillColor = TinyColor.mix(
          lettersRaw[whichFifth].color,
          lettersRaw[whichFifth - 1 < 0 ? lettersRaw.length - 1 : whichFifth - 1].color,
          100 - (getScalingTransformer(progress) * 100)
        ).toRgbString();
      })
    }

    PaperJS.view.onFrame = onFrame;
    PaperJS.view.draw();
  };

  React.useEffect(configureCanvas, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    }}>
      <canvas
        ref={canvasRef}
        resize
        height={1000}
        width={1000}
        style={{margin: '3rem auto', maxWidth: 500, width: '100%'}}
      />
    </div>
  );
}

HomeIllustration.propTypes = {
  //
};

export default HomeIllustration;
