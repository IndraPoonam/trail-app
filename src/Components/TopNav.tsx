import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem, Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, Info, ContactMail, School, Translate, Notifications, CardMembership, Subscriptions, People, Gavel, AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import { makeStyles, createStyles } from '@mui/styles';
import { useMediaQuery } from '@mui/material';

const useStyles = makeStyles(() =>
  createStyles({
    drawerPaper: {
      width: 240,
    },
  })
);

const TopNav: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard /> },
    { text: 'App Detail', icon: <Info /> },
    { text: 'Contact Us', icon: <ContactMail /> },
    { text: 'Courses', icon: <School /> },
    { text: 'Language', icon: <Translate /> },
    { text: 'Notifications', icon: <Notifications /> },
    { text: 'Certificates', icon: <CardMembership /> },
    { text: 'Subscription', icon: <Subscriptions /> },
    { text: 'Users', icon: <People /> },
    { text: 'Terms & Conditions', icon: <Gavel /> },
  ];

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1, fontWeight: 'bold', color: 'red', fontSize: '1.2rem' }}>
          EtOH Coach
        </Typography>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              classes={{ paper: classes.drawerPaper }}
            >
              <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem button key={index}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          menuItems.map((item, index) => (
            <Button startIcon={item.icon} sx={{ fontSize: '0.3rem' }} key={index}>
              {item.text}
            </Button>
          ))
        )}
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            admin@example.com
          </Typography>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;