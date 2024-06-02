import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";

import PixIcon from '@mui/icons-material/Pix';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CartIcon } from "../CartIcon/CartIcon";

function AppBarPage({ handlerRef, refs }) {
  const { refHero, refTest, refProduct } = refs;
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  const settings = [
    {
      name: "Juegos",
      path: "/list-category",
    },
    {
      name: "Account",
      path: "/account",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Logout",
      path: "/logout",
    },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (path) => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          boxShadow: 0,
          bgcolor: "#16161a",
          backgroundImage: "none",
          position: "fixed",
        }}
      >
        <Toolbar
          variant="regular"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 6 }}
          >
            <PixIcon />
            <Typography sx={{ ml: 2, fontSize: 25, fontFamily: "monospace" }}>
              PixelPeak
            </Typography>
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button onClick={() => handlerRef(refHero)} sx={{ color: "#fff" }}>
              Home
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button onClick={() => handlerRef(refTest)} sx={{ color: "#fff" }}>
              Testimonios
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              onClick={() => handlerRef(refProduct)}
              sx={{ color: "#fff" }}
            >
              P. Estandar
            </Button>
          </Box>
          <Box>
            <Tooltip title="Ultimos Productos">
              <Button sx={{ color: "#fff" }} onClick={handleOpenUserMenu}>
                Productos
                <KeyboardArrowDownIcon />
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={()=> handleNavigation(setting.path)}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ flexGrow: 2 }} />
          <CartIcon/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarPage;

