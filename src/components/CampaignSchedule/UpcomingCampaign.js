import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import axios from 'src/utils/axios';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing(40.5),
  },
  statsContainer: {
    display: 'flex',
  },
  statsItem: {
    padding: theme.spacing(3),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  },
  content: {
    textAlign: 'center',
    margin: theme.spacing(2, 3),
  },
  date: {
    whiteSpace: 'nowrap',
  },
}));

function UpcomingCampaign({ className, ...rest }) {
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchCustomers = () => {
      axios.get('/api/dashboard/customer-activity').then(response => {
        if (mounted) {
          setCustomers(response.data.customers);
        }
      });
    };

    fetchCustomers();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardHeader title="Upcoming Campaigns" />
        <Divider />
        <List disablePadding>
          {customers.map((customer, i) => (
            <ListItem divider={i < customers.length - 1} key={customer.id}>
              <ListItemAvatar className={classes.content}>
                <>
                  <Typography variant="h2">
                    {new Date().getDay() - i}
                  </Typography>
                  <Typography variant="h6">May</Typography>
                </>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <>
                    <Typography variant="h5">{customer.author.name}</Typography>
                    <Typography variant="body1">
                      {customer.author.name}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
}

UpcomingCampaign.propTypes = {
  className: PropTypes.string,
};

export default UpcomingCampaign;
