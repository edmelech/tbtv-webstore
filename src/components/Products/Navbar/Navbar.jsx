import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from './assets/TBTV-LOGO-BLK.PNG'

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" className={CallMissedSharp.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={} alt="Tbtv-store.js" height="25px" className={classes.image} />
            TBTVstore.js
          </Typography>
        </Toolbar>
      </AppBar>
    </>;
  )
};

export default Navbar;
