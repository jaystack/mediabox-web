import React from 'react';
import * as PropTypes from 'prop-types'
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    borderRadius: theme.spacing(8),
    borderWidth: 2,
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gutterBottom: {
    marginBottom: theme.spacing(4),
  }
}));

function SectionIcon({ icon, color, gutterBottom }) {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.root, { [classes.gutterBottom]: gutterBottom })}
      style={{ color, borderColor: color }}
    >
      { React.cloneElement(icon, { color: 'inherit', size: 'large' }) }
    </div>
  )
}

SectionIcon.propTypes = {
  icon: PropTypes.node,
  color: PropTypes.string,
  gutterBottom: PropTypes.bool,
};

export default SectionIcon;
