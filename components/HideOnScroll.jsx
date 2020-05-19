import React from 'react';
import * as PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Slide from '@material-ui/core/Slide';

function HideOnScroll({ children, subscribe }) {
  const trigger = useScrollTrigger();
  React.useEffect(subscribe, [trigger]);

  return (
    <Slide in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  subscribe: PropTypes.func,
};

export default HideOnScroll;
