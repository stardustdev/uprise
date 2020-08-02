import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  TextField,
  colors,
} from '@material-ui/core';
import SuccessSnackbar from './SuccessSnackbar';

const useStyles = makeStyles(theme => ({
  root: {},
  saveButton: {
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

function GeneralSettings({ profile, className, ...rest }) {
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [values, setValues] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    birthday: profile.birthday,
    industry: profile.industry,
    state: profile.state,
    country: profile.country,
    gender: profile.gender,
    twitter: profile.twitter,
    facebook: profile.facebook,
    instagram: profile.instagram,
    linkedin: profile.linkedin,
  });

  const handleChange = event => {
    event.persist();

    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form onSubmit={handleSubmit}>
        <CardHeader title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                fullWidth
                required
                value={values.birthday}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Industry"
                name="industry"
                onChange={handleChange}
                type="text"
                value={values.industry}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="State"
                name="state"
                onChange={handleChange}
                required
                value={values.state}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidthr
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Gender"
                name="gender"
                onChange={handleChange}
                required
                value={values.gender}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Twitter"
                name="twitter"
                onChange={handleChange}
                value={values.twitter}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Facebook"
                name="facebook"
                onChange={handleChange}
                value={values.facebook}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Instagram"
                name="instagram"
                onChange={handleChange}
                value={values.instagram}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="LinkedIn"
                name="linkedin"
                onChange={handleChange}
                value={values.linkedin}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            className={classes.saveButton}
            type="submit"
            variant="contained"
          >
            Save Changes
          </Button>
        </CardActions>
      </form>
      <SuccessSnackbar onClose={handleSnackbarClose} open={openSnackbar} />
    </Card>
  );
}

GeneralSettings.propTypes = {
  className: PropTypes.string,
  profile: PropTypes.object.isRequired,
};

export default GeneralSettings;
