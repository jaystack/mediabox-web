import React from 'react';
import * as PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Slide from '@material-ui/core/Slide';

function HideOnScroll({ children, disable, subscribe }) {
  const trigger = useScrollTrigger();
  React.useEffect(subscribe, [trigger]);

  return (
    <Slide in={disable || !trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  disable: PropTypes.bool,
  subscribe: PropTypes.func,
};

export default HideOnScroll;
