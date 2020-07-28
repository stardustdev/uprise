import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Link,
  Typography,
  colors,
  ButtonGroup,
  LinearProgress,
  Divider,
} from '@material-ui/core';
import {
  Message,
  ThumbUp,
  Share,
  Facebook,
  Twitter,
  LinkedIn,
} from '@material-ui/icons';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    paddingBottom: 0,
  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  description: {
    padding: theme.spacing(2, 3, 1, 3),
  },
  action: {
    margin: theme.spacing(1, 1, 0, 0),
    textAlign: 'right',
  },
  cover_image: {
    objectFit: 'cover',
    margin: theme.spacing(2, 1),
    borderRadius: theme.spacing(0.5),
    width: 'calc(100% - 16px)',
    height: theme.spacing(30),
  },
  reach_out: {
    margin: theme.spacing(2, 3, 1, 3),
  },
  progress: {
    height: theme.spacing(1),
    borderRadius: theme.spacing(0.5),
    margin: theme.spacing(2, 0),
  },
}));

function CampaignCard({ project, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        avatar={
          <Avatar alt="Author" src={project.author.avatar}>
            {getInitials(project.author.name)}
          </Avatar>
        }
        className={classes.header}
        disableTypography
        subheader={
          <Typography variant="body2">
            by{' '}
            <Link
              color="textPrimary"
              component={RouterLink}
              to="/profile/1/timeline"
              variant="h6"
            >
              {project.author.name}
            </Link>{' '}
          </Typography>
        }
        title={
          <Link
            color="textPrimary"
            component={RouterLink}
            to="/projects/1/overview"
            variant="h5"
          >
            {project.title}
          </Link>
        }
        action={
          <div className={classes.action}>
            <Typography variant="h6">Launch Date</Typography>
            <Typography variant="body2">
              {moment(project.created_at).format('LL')}
            </Typography>
          </div>
        }
      />
      <CardContent className={classes.content}>
        <div className={classes.description}>
          <Typography color="textSecondary" variant="subtitle2">
            We&apos;re looking for experienced Developers and Product Designers
            to come aboard and help us build succesful businesses through
            software.
          </Typography>
        </div>
        <img
          className={classes.cover_image}
          src={project.cover_image}
          alt="Something is wrong"
        />
        <Divider />
        <ButtonGroup fullWidth variant="text">
          <Button>All</Button>
          <Button>
            <Facebook style={{ color: colors.blue[700] }} />
          </Button>
          <Button>
            <Twitter style={{ color: colors.blue[500] }} />
          </Button>
          <Button>
            <LinkedIn style={{ color: colors.blue[900] }} />
          </Button>
        </ButtonGroup>
        <Divider />
        <div className={classes.reach_out}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2">ADVOCATES SHARE</Typography>
              <Typography variant="h3">80%</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" align="right">
                REACH
              </Typography>
              <Typography variant="h3" align="right">
                720,456
              </Typography>
            </Grid>
          </Grid>
          <LinearProgress
            classes={{
              root: classes.progress,
            }}
            variant="determinate"
            value={80}
          />
        </div>
        <Divider />
        <ButtonGroup fullWidth>
          <Button startIcon={<ThumbUp />} variant="text" size="large">
            12,345
          </Button>
          <Button startIcon={<Message />} variant="text" size="large">
            3,569
          </Button>
          <Button startIcon={<Share />} variant="text" size="large">
            888,888
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

CampaignCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired,
};

export default CampaignCard;
