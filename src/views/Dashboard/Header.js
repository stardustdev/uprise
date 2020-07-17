import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  startDateButton: {
    marginRight: theme.spacing(1),
  },
  endDateButton: {
    marginLeft: theme.spacing(1),
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Header({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography component="h1" gutterBottom variant="h4">
        GENERAL DASHBOARD
      </Typography>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
