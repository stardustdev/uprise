import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';
import Chart from './Chart';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  content: {
    padding: 0,
  },
  chart: {
    padding: theme.spacing(4, 2, 0, 2),
    height: 320,
  },
}));

function StatByAge({ className, ...rest }) {
  const classes = useStyles();

  const data = [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20];

  const labels = ['<20', '30', '40', '50', '60', '70<'];

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Age" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <Chart className={classes.chart} data={data} labels={labels} />
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
}

StatByAge.propTypes = {
  className: PropTypes.string,
};

export default StatByAge;
