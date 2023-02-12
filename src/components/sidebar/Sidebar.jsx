import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import PostAdd from "@mui/icons-material/PostAdd";
import Info from "@mui/icons-material/Info";
import Moon from "@mui/icons-material/ModeNight";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "none", md:"block" } }}>
      <Box position="fixed" width={{xs: 0, sm: 0, md: 150, lg: 200}}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PostAdd />
              </ListItemIcon>
              <ListItemText primary="Posts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Moon />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
