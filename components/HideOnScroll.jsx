import React from 'react';
import * as PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HideOnScroll;
