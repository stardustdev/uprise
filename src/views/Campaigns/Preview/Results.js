import React from 'react';
import clsx from 'clsx';
import { makeStyles, Grid, Card, Typography, Chip } from '@material-ui/core';
import moment from 'moment';
import uuid from 'uuid/v1';
import CampaignCard from 'src/components/CampaignCard';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    margin: theme.spacing(1),
  },
  subtitle: {
    color: grey[600],
    margin: theme.spacing(2),
  },
  body: {
    margin: theme.spacing(0, 2, 2, 2),
  },
  chip: {
    marginLeft: theme.spacing(0.5),
  },
}));

const Results = ({ className, customers, ...rest }) => {
  const classes = useStyles();

  const project = {
    id: uuid(),
    title: 'Mella Full Screen Slider',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png',
    },
    price: '12,500',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    members: 5,
    cover_image:
      'https://img.etimg.com/thumb/width-640,height-480,imgsize-113192,resizemode-1,msid-68497142/small-biz/marketing-branding/marketing/how-native-campaigns-can-help-you-achieve-your-campaign-kpis/gettyimages-925192752.jpg',
    start_date: moment(),
    end_date: moment(),
    updated_at: moment().subtract(24, 'minutes'),
    chips: ['Design', 'Development', 'Software'],
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid container justify="center">
        <Grid container item md={7}>
          <Card>
            <Grid container>
              <Grid item xs={7}>
                <Typography
                  className={classes.title}
                  variant="h4"
                  align="center"
                >
                  Details Preview
                </Typography>
                <CampaignCard project={project} />
              </Grid>
              <Grid item xs={5}>
                <Typography
                  className={classes.title}
                  variant="h4"
                  align="center"
                >
                  Target Preview
                </Typography>
                <Typography className={classes.subtitle} variant="body1">
                  INDUSTRY TAGS (OPTIONAL)
                </Typography>
                {project.chips.map(chip => (
                  <Chip
                    className={classes.chip}
                    key={chip}
                    label={chip}
                    color="primary"
                  />
                ))}
                <Typography className={classes.subtitle} variant="body1">
                  LOCATION (OPTIONAL)
                </Typography>
                {project.chips.map(chip => (
                  <Chip
                    className={classes.chip}
                    key={chip}
                    label={chip}
                    color="primary"
                  />
                ))}
                <Typography className={classes.subtitle} variant="body1">
                  Age (OPTIONAL)
                </Typography>
                <Typography className={classes.body} variant="h5">
                  17 - 32
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Results;
