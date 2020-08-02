import React from 'react';
import clsx from 'clsx';
import { Card, makeStyles } from '@material-ui/core';
import AdvocateForm from 'src/components/AdvocateForm';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Results = ({ className, customers, ...rest }) => {
  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Card>
        <AdvocateForm />
      </Card>
    </div>
  );
};

export default Results;
