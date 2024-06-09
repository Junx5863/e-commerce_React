import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Drawer,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import PixIcon from "@mui/icons-material/Pix";
import CarIcon from "../CarIcon";
import { useNavigate } from "react-router-dom";

function AppBarCarPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <AppBar
        sx={{
          boxShadow: 0,
          bgcolor: "#16161a",
          backgroundImage: "none",
          // mt: 2,
          // borderRadius: "10px",
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
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 6 }}
            onClick={() => handleNavigation("/")}
          >
            <PixIcon />
            <Typography sx={{ ml: 2, fontSize: 25, fontFamily: "monospace" }}>
              PixelPeak
            </Typography>
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button onClick={ () => handleNavigation("/list-category") } sx={{ color: "#fff" }}>Categorias</Button>
          </Box>
          {/* <Typography variant="h6" component="div" sx={{ paddingRight: 3 }}>
              Pricing
            </Typography> */}
          <Box sx={{ flexGrow: 2 }} />
          {/* Cart Icon */}
          <CarIcon />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default AppBarCarPage;
