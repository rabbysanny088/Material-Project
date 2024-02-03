import {
  AllInboxOutlined,
  AutoFixOff,
  Bolt,
  DarkMode,
  Dashboard,
  ExpandLess,
  ExpandMore,
  LightMode,
  LocationCityOutlined,
  Settings,
  SettingsInputAntenna
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import {
  Avatar,
  Badge,
  Collapse,
  Fade,
  Menu,
  MenuItem,
  Popover,
  Stack,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Profile from "../Separate/Profile";
import Drawers from "../assets/img/Drawers";
import Routers from "./Routers";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [isCollapse, setCollapse] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEled, setAnchorEled] = React.useState(null);
  const opened = Boolean(anchorEled);
  const handleClicked = (event) => {
    setAnchorEled(event.currentTarget);
  };
  const handleClosed = () => {
    setAnchorEled(null);
  };

  const isMenuItemSelected = (path) => {
    return location.pathname === path;
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleCollapse = () => {
    setCollapse(!isCollapse);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "rgba(255, 0, 0, 0.507)",
        }}
      >
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Toolbar>
              <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <SearchIcon />
              </Typography>
            </Toolbar>
          </Box>
          <Stack spacing={2} direction="row">
            <WbSunnyIcon onClick={handleClick} sx={{ cursor: "pointer" }} />
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={opens}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>
                {" "}
                <Stack
                  direction="row"
                  display="flex"
                  gap={1}
                  alignItems="center"
                >
                  <DarkMode />
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Dark
                  </Typography>
                </Stack>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                {" "}
                <Stack
                  direction="row"
                  display="flex"
                  gap={1}
                  alignItems="center"
                >
                  <LightMode />
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Light
                  </Typography>
                </Stack>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                {" "}
                <Stack
                  direction="row"
                  display="flex"
                  gap={1}
                  alignItems="center"
                >
                  <SettingsInputAntenna />
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Dark
                  </Typography>
                </Stack>
              </MenuItem>
            </Menu>
            <Settings />
            <Drawers />
            <Badge badgeContent={3} color="success">
              <NotificationsIcon />
            </Badge>

            <Popover
              open={opened}
              anchorEl={anchorEled}
              onClose={handleClosed}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>
                <Profile />
              </Typography>
            </Popover>
            <Avatar
              onClick={handleClicked}
              sx={{
                backgroundColor: "orange",
                display: "flex",
                alignItems: "center",
                width: 30,
                height: 30,
              }}
            >
              {" "}
              R{" "}
            </Avatar>
          </Stack>
        </Stack>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton> */}
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            className={isMenuItemSelected("/default") ? "selected" : ""}
            disablePadding
            sx={{ display: "block" }}
            onClick={handleCollapse}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Overview" sx={{ opacity: open ? 1 : 0 }} />
              {isCollapse ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isCollapse} timeout="auto" unmountOnExit>
            <ListItem
              className={isMenuItemSelected("/default") ? "selected" : ""}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/default");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Badge color="secondary" variant="dot" />
                </ListItemIcon>
                <ListItemText
                  primary="Default"
                  sx={{
                    opacity: open ? 1 : 0,
                    color: isMenuItemSelected("/default") ? "blue" : "",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              className={isMenuItemSelected("/analytics") ? "selected" : ""}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/analytics");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Badge color="secondary" variant="dot" />
                </ListItemIcon>
                <ListItemText
                  primary="Analytics"
                  sx={{
                    opacity: open ? 1 : 0,
                    color: isMenuItemSelected("/analytics") ? "blue" : "",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Collapse>
          <ListItem
            disablePadding
            className={isMenuItemSelected("/statistics") ? "selected" : ""}
            sx={{
              display: "block",
            }}
            onClick={() => {
              navigate("/statistics");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: isMenuItemSelected("/statistics") ? "blue" : "gray",
                }}
              >
                <LocationCityOutlined />
              </ListItemIcon>
              <ListItemText
                primary="Statistics"
                sx={{
                  opacity: open ? 1 : 0,
                  color: isMenuItemSelected("/statistics") ? "blue" : "gray",
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            className={isMenuItemSelected("/data") ? "selected" : ""}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/data");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: isMenuItemSelected("/data") ? "blue" : "gray",
                }}
              >
                <Bolt />
              </ListItemIcon>
              <ListItemText primary="Data" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            className={isMenuItemSelected("/price") ? "selected" : ""}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/price");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: isMenuItemSelected("/price") ? "blue" : "gray",
                }}
              >
                <AutoFixOff />
              </ListItemIcon>
              <ListItemText primary="Price" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            className={isMenuItemSelected("/price2") ? "selected" : ""}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/price2");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: isMenuItemSelected("/price2") ? "blue" : "gray",
                }}
              >
                <AllInboxOutlined />
              </ListItemIcon>
              <ListItemText primary="Price2" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Routers />
      </Main>
    </Box>
  );
}
