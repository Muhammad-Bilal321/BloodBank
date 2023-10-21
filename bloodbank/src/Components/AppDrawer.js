import React, { useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";

function AppDrawer() {
  const navigate = useNavigate(); // Get the navigate function

  const [openDrawer, setOpenDrawer] = useState(false); // State to manage drawer open/close
  const [openSubMenu, setOpenSubMenu] = useState(""); // State to manage submenu open/close

  const listItem = [
    {
      text: "Home",
      icon: <SupervisorAccountIcon />,
      route: "/"
    },
    {
      text: "Donor",
      icon: <SchoolIcon />,
      subItems: [
        {
          text: "Donor List",
          route: "/donor-list",
          icon: <SchoolIcon />,
        },
        {
          text: "Donor Form",
          route: "/donor-form",
          icon: <EditIcon />,
        },
    
      ],
    },
    {
      text: "About",
      icon: <InfoIcon />,
      route: "/", // Specify the route to navigate to
    },
    {
      text: "Contact",
      icon: <CallIcon />,
      route: "/", // Specify the route to navigate to
    },
    // Add submenu items
    // {
    //   text: "Submenu",
    //   icon: openSubMenu ? <ExpandLessIcon /> : <ExpandMoreIcon />,
    //   subItems: [
    //     {
    //       text: "Submenu Item 1",
    //       route: "/",
    //     },
    //     {
    //       text: "Submenu Item 2",
    //       route: "/",
    //     },
    //   ],
    // },
  ];

  const handleRouter = (route) => {
    navigate(route); // Use navigate to change the route
  };

  const handleSubMenuClick = (text) => {
    // Toggle submenu open/close
    setOpenSubMenu(openSubMenu === text ? "" : text);
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer); // Open/close the drawer
  };

  return (
    <>
      <AppBar position="static" color="error">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          {/* Add your app title or logo here */}
          {/* <Typography variant="h6">Your App</Typography> */}
        </Toolbar>
      </AppBar>
      <MuiDrawer
        variant="temporary"
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer}
      >
        <List>
          {listItem.map((item, index) => {
            const { text, icon, route, subItems } = item;
            return (
              <div key={text}>
                {subItems ? (
                  <>
                    <ListItem onClick={() => handleSubMenuClick(text)}>
                      <ListItemButton>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={text} />
                        {openSubMenu === text ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </ListItemButton>
                    </ListItem>
                    <Collapse
                      in={openSubMenu === text}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {subItems.map((subItem, subIndex, subIcon) => (
                          <ListItem
                            key={subIndex}
                            onClick={() => handleRouter(subItem.route)}
                          >
                            <ListItemButton>
                              <ListItemIcon> {subIcon.icon}</ListItemIcon>
                              <ListItemText primary={subItem.text} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItem onClick={() => handleRouter(route)}>
                    <ListItemButton>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )}
              </div>
            );
          })}
        </List>
      </MuiDrawer>
    </>
  );
}

export default AppDrawer;
