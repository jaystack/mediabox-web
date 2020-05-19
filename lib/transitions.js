const easing = [0.4, 0.0, 0.2, 1];

export const standardTransition = {
  initial: { scale: 0.95, opacity: 0, transition: { duration: 0.3, ease: easing } },
  exit: { scale: 0.95, opacity: 0, transition: { duration: 0.3, ease: easing } },
  enter: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0, duration: 0.3, ease: easing },
  },
};

export const standardWithAbsTransition = {
  initial: { opacity: 0, transition: { duration: 0.20, ease: easing } },
  exit: {
    opacity: 0,
    transition: { duration: 0.20, ease: easing },
    // position: 'absolute',
  },
  enter: {
    opacity: 1,
    height: 'auto',
    transition: { delay: 0, duration: 0.20, ease: easing },
  },
};

export const standardInvertedTransition = {
  initial: { scale: 1.05, opacity: 0, transition: { duration: .5, ease: easing } },
  exit: { scale: 1.05, opacity: 0, transition: { duration: .5, ease: easing } },
  enter: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0, duration: .5, ease: easing },
  },
};


export const fadeTransition = (duration, delay = 0) => ({
  initial: { opacity: 0, transition: { duration, ease: easing } },
  exit: { opacity: 0, transition: { duration, ease: easing } },
  enter: {
    opacity: 1,
    transition: { delay, duration, ease: easing },
  },
});


export const fadeToHalfTransition = (duration, delay = 0) => ({
  initial: { opacity: 0, scale: 1.05, transition: { duration, ease: easing } },
  exit: { opacity: 0, scale: 1.05, transition: { duration, ease: easing } },
  enter: {
    opacity: 0.5,
    scale: 1,
    transition: { delay, duration, ease: easing },
  },
});


export const slideTransition = (duration, direction, amount) => ({
  initial: { x: direction ? -amount : amount, opacity: 0, transition: { duration, ease: easing }, position: 'absolute' },
  exit: { x: direction ? amount : -amount, opacity: 0, transition: { duration, ease: easing }, position: 'absolute' },
  initialReverse: { x: direction ? amount : -amount, opacity: 0, transition: { duration, ease: easing }, position: 'absolute' },
  exitReverse: { x: direction ? -amount : amount, opacity: 0, transition: { duration, ease: easing }, position: 'absolute' },
  enter: {
    x: 0,
    opacity: 1,
    transition: { delay: 0, duration, ease: easing },
    position: 'relative',
  },
});
