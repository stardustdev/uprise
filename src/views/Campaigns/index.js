import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import Header from './Header';
import Results from './Results';
import CampaignSchedule from 'src/components/CampaignSchedule';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  results: {
    marginTop: theme.spacing(3),
  },
}));

function Campaigns() {
  const classes = useStyles();
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'Silje Larsen',
      industry: 'Food',
      field: 'Manufacturing',
      location: 'Melbourne',
      country: 'Australia',
      age: '43',
      gender: 'Male',
      reach: 23300,
      testing: true,
    },
    {
      id: 2,
      name: 'Storm Hansen',
      industry: 'IT/Computer',
      field: 'Science',
      location: 'Toronto',
      country: 'Canada',
      age: '24',
      gender: 'Male',
      reach: 1700,
      testing: false,
    },
    {
      id: 3,
      name: 'Frida Thomsen',
      industry: 'IT/Computer',
      field: 'Science',
      location: 'Waterloo',
      country: 'Canada',
      age: '33',
      gender: 'Female',
      reach: 1560,
      testing: true,
    },
  ]);

  useEffect(() => {
    let mounted = true;

    const fetchCustomers = () => {
      axios.get('/api/management/customers').then(response => {
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
    <Page className={classes.root} title="Customer Management List">
      <Container maxWidth={false}>
        <Header />
        <Grid container spacing={3}>
          <Grid item md={9}>
            <Results className={classes.results} customers={customers} />
          </Grid>
          <Grid item md={3}>
            <CampaignSchedule />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default Campaigns;
