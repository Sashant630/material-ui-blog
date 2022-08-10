import { Divider, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import React from "react";

const Header = () => {
  return (
    <>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6"> Blogging Website</Typography>
        <IconButton>
          {/* <Badge badgeContent={4} color="primary"> */}
            <NotificationsIcon />
          {/* </Badge> */}
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar>Express your emotions through words</Toolbar>
    </>
  );
};

export default Header;
