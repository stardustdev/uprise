import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import LeaderBoard from './LeaderBoard';
import TotalLikes from './TotalLikes';
import TotalComments from './TotalComments';
import TotalShares from './TotalShares';
import TotalViews from './TotalViews';
import TotalReach from './TotalReach';
import StatByAge from './StatByAge';
import StatByGender from './StatByGender';
import StatByRegion from './StatByRegion';
import CampaignSchedule from '../../components/CampaignSchedule';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  grid: {
    marginTop: theme.spacing(2),
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Header />
        <Grid container spacing={3} className={classes.grid}>
          <Grid container item md={9} spacing={3}>
            <Grid item lg={3} sm={6} xs={12}>
              <TotalShares />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <TotalLikes />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <TotalViews />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <TotalComments />
            </Grid>
            <Grid item lg={8} xs={12}>
              <TotalReach />
            </Grid>
            <Grid item lg={4} xs={12}>
              <LeaderBoard />
            </Grid>
            <Grid item lg={6}>
              <StatByRegion />
            </Grid>
            <Grid item lg={4}>
              <StatByAge />
            </Grid>
            <Grid item lg={2}>
              <StatByGender />
            </Grid>
          </Grid>
          <Grid container item md={3} spacing={3}>
            <CampaignSchedule />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default Dashboard;
