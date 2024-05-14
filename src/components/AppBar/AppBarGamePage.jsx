import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  InputBase,
  Drawer,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { useRef } from "react";
import useListPage from "../../pages/ListProductos/useListPages";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
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
