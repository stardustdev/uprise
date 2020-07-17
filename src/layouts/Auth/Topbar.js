import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
  },
}));

function Topbar({ className, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="primary">
      <Toolbar>
        <img alt="Logo" src="/images/logos/uprise-logo-left.svg" />
      </Toolbar>
    </AppBar>
  );
}

Topbar.propTypes = {
  className: PropTypes.string,
};

export default Topbar;
