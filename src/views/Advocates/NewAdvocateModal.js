/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Dialog,
  Typography,
  colors,
  InputBase,
} from '@material-ui/core';

import { getAdvocateList } from 'src/store/advocate/action';

const useStyles = makeStyles(theme => ({
  root: {
    width: 720,
  },
  header: {
    maxWidth: 600,
    margin: '0 auto',
    padding: theme.spacing(3),
  },
  content: {
    padding: theme.spacing(2),
    maxWidth: 600,
    margin: '0 auto',
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  actions: {
    backgroundColor: colors.grey[100],
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
  submitButton: {
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    width: theme.spacing(20),
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
  subject_input: {
    border: '1px solid #e2e2e2',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: theme.spacing(5),
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  message_input: {
    border: '1px solid #e2e2e2',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: theme.spacing(30),
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function NewAdvocateModal({ open, onClose, className, ...rest }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    dispatch(getAdvocateList());
  }, []);

  const handleSubmit = () => {
    if (!subject || !message) {
      alert('data is missing');
      return;
    }
    setSubject('');
    setMessage('');
    onClose();
  };

  return (
    <Dialog maxWidth="lg" onClose={onClose} open={open}>
      <div {...rest} className={clsx(classes.root, className)}>
        <div className={classes.header}>
          <Typography align="center" gutterBottom variant="h3">
            HELP DESK
          </Typography>
          <Typography
            align="center"
            className={classes.subtitle}
            variant="subtitle2"
          >
            HEY UPRISE USER! HOW CAN WE HELP YOU?
          </Typography>
        </div>
        <div className={classes.content}>
          <Typography variant="h4" gutterBottom marginTop>
            Subject*
          </Typography>
          <InputBase
            className={classes.subject_input}
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Add Subject"
          />
          <Typography variant="h4" gutterBottom>
            Message*
          </Typography>
          <InputBase
            className={classes.message_input}
            multiline
            rows={13}
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Add Message"
          />
        </div>
        <div className={classes.actions}>
          <Button
            className={classes.submitButton}
            onClick={handleSubmit}
            variant="contained"
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </Dialog>
  );
}

NewAdvocateModal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export default NewAdvocateModal;
