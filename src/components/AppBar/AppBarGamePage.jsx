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

import PixIcon from '@mui/icons-material/Pix';
import useListPage from "../../pages/ListProductos/useListPages";
import CarIcon from "../CarIcon";




function AppBarPageGames({ handlerRef, refs }) {
  const { list, toggleDrawer, stateDrawer } = useListPage();
 

  const { xboxseries, playStation } = refs;


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
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
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
            <Button
              onClick={() => handlerRef(xboxseries)}
              sx={{ color: "#fff" }}
            >
              Xbox series x/s
            </Button>
          </Box>
          {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }}>About</Button>
          </Box> */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              onClick={() => handlerRef(playStation)}
              sx={{ color: "#fff" }}
            >
              Play Station 4 - 5
            </Button>
          </Box>
          {/* <Typography variant="h6" component="div" sx={{ paddingRight: 3 }}>
            Pricing
          </Typography> */}
          <Box sx={{ flexGrow: 2 }} />
          {/* Cart Icon */}
          <CarIcon/>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={stateDrawer["left"]}
        onClose={toggleDrawer(false)}
      >
        <div>
          <Typography
            variant="h5"
            alignContent={"center"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
              color: "#fff",
              bgcolor: "#16161a",
            }}
          >
            Menu Opciones
          </Typography>
        </div>
        {list("left")}
      </Drawer>
    </>
  );
}

export default AppBarPageGames;
