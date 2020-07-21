/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  colors,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon from '@material-ui/icons/Help';
import axios from 'src/utils/axios';
import NotificationsPopover from 'src/components/NotificationsPopover';
import HelpModal from 'src/components/HelpModal';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1,
  },
  helpButton: {
    marginLeft: theme.spacing(1),
  },
  notificationsButton: {
    marginLeft: theme.spacing(1),
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600],
  },
  logoutButton: {
    marginLeft: theme.spacing(1),
  },
  logoutIcon: {
    marginRight: theme.spacing(1),
  },
}));

const popularSearches = [
  'Devias React Dashboard',
  'Devias',
  'Admin Pannel',
  'Project',
  'Pages',
];

function TopBar({ onOpenNavBarMobile, className, ...rest }) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const notificationsRef = useRef(null);
  const [notifications, setNotifications] = useState([]);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchNotifications = () => {
      axios.get('/api/account/notifications').then(response => {
        if (mounted) {
          setNotifications(response.data.notifications);
        }
      });
    };

    fetchNotifications();

    return () => {
      mounted = false;
    };
  }, []);

  const handleLogout = () => {
    history.push('/auth/login');
    // dispatch(logout());
  };

  const handleHelpModalOpen = () => {
    setHelpModalOpen(true);
  };

  const handlePricingModalClose = () => {
    setHelpModalOpen(false);
  };

  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
  };

  const handleNotificationsClose = () => {
    setOpenNotifications(false);
  };

  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="primary">
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={onOpenNavBarMobile}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <img alt="Logo" src="/images/logos/uprise-logo-left.svg" />
        <div className={classes.flexGrow} />
        <IconButton
          className={classes.helpButton}
          color="inherit"
          onClick={handleHelpModalOpen}
        >
          <HelpIcon />
        </IconButton>
        <IconButton
          className={classes.notificationsButton}
          color="inherit"
          onClick={handleNotificationsOpen}
          ref={notificationsRef}
        >
          <Badge
            badgeContent={notifications.length}
            classes={{ badge: classes.notificationsBadge }}
            variant="dot"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Button
          className={classes.logoutButton}
          color="inherit"
          onClick={handleLogout}
        >
          <InputIcon className={classes.logoutIcon} />
          <Hidden mdDown>Sign Out</Hidden>
        </Button>
      </Toolbar>
      <NotificationsPopover
        anchorEl={notificationsRef.current}
        notifications={notifications}
        onClose={handleNotificationsClose}
        open={openNotifications}
      />
      <HelpModal onClose={handlePricingModalClose} open={helpModalOpen} />
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func,
};

export default TopBar;
