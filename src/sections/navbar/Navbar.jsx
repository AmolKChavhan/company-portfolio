import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import AccountIcon from "../../assets/images/user-profile-icon.jpg";
import "./navbar.css";
import NavBarData from "./navData";
import NavImage from "../../assets/images/profile_Logo.png";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(null);
  const [userMenu, setUserMenu] = useState(null);

  const handleOpenNavMenu = (event) => {
    setNavMenu(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setUserMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavMenu(null);
  };

  const handleCloseUserMenu = () => {
    setUserMenu(null);
  };

  return (
    <AppBar position="fixed" id="navbar" className="navbar">
      <Container maxWidth="xl">
        <Toolbar className="nav_container" disableGutters>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Menu">
              <IconButton onClick={handleOpenNavMenu}>
                <MdMenu style={{ color: "Menu" }} />
              </IconButton>
            </Tooltip>
            <Menu
              className="nav_menu"
              anchorEl={navMenu}
              open={Boolean(navMenu)}
              onClose={handleCloseNavMenu}
            >
              {NavBarData.map((section) => (
                <MenuItem key={section.id} onClick={handleCloseNavMenu}>
                  <Typography>{section.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className="nav_logo">
            <Link underline="none">
              <strong>SRIJAN DEV</strong>
              {/* <img src={NavImage} alt="Navbar" /> */}
            </Link>
              {/* <IconButton>
                <Avatar variant="square" src={NavImage} alt="Navbar" />
              </IconButton> */}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {NavBarData.map((section) => (
              <Button key={section.id} onClick={handleCloseNavMenu}>
                <strong>{section.title}</strong>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={AccountIcon} alt="Account Icon" />
              </IconButton>
            </Tooltip>
            <Menu
              className="user-settings"
              id="menu-appbar"
              anchorEl={userMenu}
              open={Boolean(userMenu)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
