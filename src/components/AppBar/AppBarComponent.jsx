import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  InputBase,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";


import { useNavigate } from 'react-router-dom';

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



function AppBarPage({ handlerRef, refs }) {
  const { refHero, refTest, refProduct } = refs;
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
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
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button onClick={ () => handlerRef(refHero) } sx={{ color: "#fff" }}>
              Home
            </Button>
          </Box>
          {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }}>About</Button>
          </Box> */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button onClick={ () => handlerRef(refTest) } sx={{ color: "#fff" }}>Testimonios</Button>
          </Box>
          {/* <Typography variant="h6" component="div" sx={{ paddingRight: 3 }}>
            Pricing
          </Typography> */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button onClick={ () => handlerRef(refProduct) } sx={{ color: "#fff" }}>P. Estandar</Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button onClick={ () => handleNavigation('/list-category') } sx={{ color: "#fff" }}>Categorias</Button>
          </Box>
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
    </Box>
  );
}

export default AppBarPage;
