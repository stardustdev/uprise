import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import axios from 'src/utils/axios';
import CampaignCard from 'src/components/CampaignCard';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main,
    },
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
  sortButton: {
    textTransform: 'none',
    letterSpacing: 0,
    marginRight: theme.spacing(2),
  },
}));

function Projects({ className, ...rest }) {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchProjects = () => {
      axios.get('/api/projects').then(response => {
        if (mounted) {
          setProjects(response.data.projects);
        }
      });
    };

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid container spacing={3}>
        {projects.map(project => (
          <Grid item key={project.id} md={4} sm={6} xs={12}>
            <CampaignCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

Projects.propTypes = {
  className: PropTypes.string,
};

export default Projects;
