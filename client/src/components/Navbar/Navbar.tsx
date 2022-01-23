import React, { useState } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { AppBar, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar } from '@mui/material';
import { AccountCircle, Logout as LogoutIcon, Person as ProfileIcon } from '@mui/icons-material';
import Box from '@mui/material/Box';
import useStyles from './useStyles';
import { useHistory, useLocation } from 'react-router-dom';
import { User } from '../../interface/User';

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { loggedInUser, logout } = useAuth();
  const history = useHistory();
  const { pathname } = useLocation();

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const getUserPhoto = (user: User) => {
    return undefined;
  };

  const goToProfile = () => {
    handleClose();
    if (pathname !== '/dashboard/profile') {
      history.push('/dashboard/profile');
    }
  };

  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar>
        <img src={require('../../Images/logo.png')} alt="Loving Sitter" />
        <Box sx={{ flexGrow: 1 }} />
        {loggedInUser && (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
              className={classes.photoButton}
            >
              {
                // TODO: change the function after I know how to get user's photo
                getUserPhoto(loggedInUser) ? (
                  <img src={getUserPhoto(loggedInUser)} className={classes.photo} />
                ) : (
                  <AccountCircle fontSize="large" className={classes.photo} />
                )
              }
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={goToProfile}>
                <ListItemIcon>
                  <ProfileIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
