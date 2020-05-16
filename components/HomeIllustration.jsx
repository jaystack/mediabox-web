import React from 'react';
import PaperJS, { Path, Group, PointText, Point } from 'paper';
import TinyColor from 'tinycolor2';
import useTheme from '@material-ui/core/styles/useTheme';
import Popover from '@material-ui/core/Popover';
import NoSsr from '@material-ui/core/NoSsr';
import Typography from '@material-ui/core/Typography';
import {motion, AnimatePresence} from 'framer-motion';

const getSVG = url => new Promise(resolve => PaperJS.project.importSVG(url, resolve));

function HomeIllustration() {
  const theme = useTheme();
  const canvasRef = React.useRef(null);
  const timeoutRef = React.useRef(null);
  const [anchorData, setAnchorData] = React.useState(null);

  const configureCanvas = async () => {
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


    const logo = await getSVG('/mediabox-darkbg.svg');
    logo.scale(0.07);
    logo.position = centralCircle.bounds.center;

    function createSectionCircle(el, i, arr) {
      const center = path.getPointAt(
        getNormalisedProgress((path.length / 4) + ((path.length / arr.length) * i))
      );
      const circle = new Path.Circle({
        center,
        radius: PaperJS.view.size.width / 12,
        fillColor: el.color,
      });

      const text = new PointText({
        position: new Point(circle.bounds.center.x, circle.bounds.center.y + 17),
        justification: 'center',
        content: el.initial,
        fillColor: 'white',
        fontFamily: 'Roboto',
        fontWeight: 900,
        fontSize: 48
      });
      text.pivot = text.bounds.center;

      return new Group([circle, text]);
    }

    const lettersRaw = [
      { initial: 'A', color: '#209ac3', title: 'Create' },
      { initial: 'B', color: '#262626', title: 'Manage' },
      { initial: 'C', color: '#a1b8bf', title: 'Distribute' },
      { initial: 'D', color: '#262626', title: 'Archive' },
      { initial: 'E', color: '#a1b8bf', title: 'Retrieve' }
    ];
    const letters = lettersRaw.map(createSectionCircle);

    const onMouseEnter = index => e => {
      e.stopPropagation();
      clearTimeout(timeoutRef.current);
      setAnchorData({
        ...lettersRaw[index],
        position: letters[index].bounds.center,
      });
    };

    const onMouseLeave = () => {
      timeoutRef.current = setTimeout(() => setAnchorData(null), 150)
    };

    letters.forEach((l, i) => {
      l.on('mouseenter', onMouseEnter(i));
      l.on('mouseleave', onMouseLeave);
    });
    // canvasRef.current.addEventListener('mouseleave', onMouseLeave);

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

    function getScalingTransformer(progress) {
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

  React.useEffect(() => { configureCanvas() }, []);

  return (
    <React.Fragment>
      <NoSsr>
        <Popover
          open={Boolean(anchorData)}
          anchorReference="anchorPosition"
          anchorPosition={{
            top: (canvasRef.current?.getBoundingClientRect()?.top || 0) + (anchorData?.position?.y || 0),
            left: (canvasRef.current?.getBoundingClientRect()?.left || 0) + (anchorData?.position?.x || 0),
          }}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'top',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div style={{padding: theme.spacing(2), maxWidth: theme.spacing(40)}}>
            <AnimatePresence exitBeforeEnter>
              <motion.div key={anchorData?.title}>
                <Typography variant="h6" gutterBottom>
                  { anchorData?.title }
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tempor tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus imperdiet erat quis ultrices tincidunt.
                </Typography>
              </motion.div>
            </AnimatePresence>
          </div>
        </Popover>
      </NoSsr>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      }}>
        <canvas
          ref={canvasRef}
          height={1000}
          width={1000}
          style={{margin: '3rem auto', maxWidth: 500, width: '100%'}}
        />
      </div>
    </React.Fragment>
  );
}

HomeIllustration.propTypes = {
  //
};

export default HomeIllustration;
