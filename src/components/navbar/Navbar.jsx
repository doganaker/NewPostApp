import { AppBar, Avatar, Badge, Typography } from "@mui/material";
import React from "react";
import Signpost from "@mui/icons-material/Signpost";
import Mail from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import { avatarStyle, navbarStyle } from "./NavbarStyleHelper";
import {
  StyledIcons,
  StyledToolbar,
  StyledUser,
} from "./styled components/StyledHelperComponents";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={navbarStyle("none", "block")}>
          PostApp
        </Typography>
        <Signpost sx={navbarStyle("block", "none")} />
        <StyledIcons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={avatarStyle(30, 30)}
            src="https://images.pexels.com/photos/5231575/pexels-photo-5231575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </StyledIcons>
        <StyledUser>
          <Avatar
            sx={avatarStyle(30, 30)}
            src="https://images.pexels.com/photos/5231575/pexels-photo-5231575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography variant="span">Doğan</Typography>
        </StyledUser>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
