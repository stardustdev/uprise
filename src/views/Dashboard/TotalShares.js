import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  label: {
    marginLeft: theme.spacing(1),
  },
  avatar: {
    height: 48,
    width: 48,
    marginRight: theme.spacing(3),
  },
}));

function TotalShares({ className, ...rest }) {
  const classes = useStyles();
  const data = {
    value: '24,000',
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <Avatar className={classes.avatar} src={'/images/total-share.png'} />
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          Total Shares
        </Typography>
        <div className={classes.details}>
          <Typography variant="h3">{data.value}</Typography>
        </div>
      </div>
    </Card>
  );
}

TotalShares.propTypes = {
  className: PropTypes.string,
};

export default TotalShares;
