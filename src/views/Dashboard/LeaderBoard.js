import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  InputLabel,
} from '@material-ui/core';
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';
import { green, red } from '@material-ui/core/colors';
import axios from 'src/utils/axios';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  author: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(3),
  },
  tags: {
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  },
  actions: {
    justifyContent: 'flex-end',
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1),
  },
  views: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function LeaderBoard({ className, ...rest }) {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchProjects = () => {
      axios.get('/api/dashboard/latest-projects').then(response => {
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
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Leaderboard" />
      <Divider />
      <PerfectScrollbar options={{ suppressScrollY: true }}>
        <Table>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow hover key={project.id}>
                <TableCell>
                  <div className={classes.author}>
                    <Avatar
                      alt="Author"
                      className={classes.avatar}
                      src={project.author.avatar}
                    >
                      {getInitials(project.author.name)}
                    </Avatar>
                    {project.author.name}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div className={classes.views}>
                    {index <= 2 && (
                      <ArrowDropUp style={{ color: green[600] }} />
                    )}
                    {index > 2 && <ArrowDropDown style={{ color: red[600] }} />}
                    <InputLabel>{project.price}</InputLabel>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </PerfectScrollbar>
    </Card>
  );
}

LeaderBoard.propTypes = {
  className: PropTypes.string,
};

export default LeaderBoard;
