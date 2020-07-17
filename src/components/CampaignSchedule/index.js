import React from 'react';

import Calendar from './Calendar';
import UpcomingCampaign from './UpcomingCampaign';
import { makeStyles, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  campaign_board: {
    marginTop: theme.spacing(-4.5),
    marginLeft: theme.spacing(5),
  },
}));

const CampaignSchedule = () => {
  const classes = useStyles();

  return (
    <div className={classes.campaign_board}>
      <Grid container spacing={3}>
        <Grid item>
          <Typography variant="h4">Campaign Calendar</Typography>
        </Grid>
        <Grid item>
          <Calendar />
        </Grid>
        <Grid item>
          <UpcomingCampaign />
        </Grid>
      </Grid>
    </div>
  );
};

export default CampaignSchedule;
