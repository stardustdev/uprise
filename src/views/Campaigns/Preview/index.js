import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
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

function PreviewCampaign() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="New Advocate">
      <Container maxWidth={false}>
        <Header />
        <Grid container spacing={3}>
          <Grid item md={9}>
            <Results className={classes.results} />
          </Grid>
          <Grid item md={3}>
            <CampaignSchedule />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default PreviewCampaign;
