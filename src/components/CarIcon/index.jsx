import { Badge, Box, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../core/context/CartContext";

const CarIcon = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
      };
      


  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <IconButton
        onClick={() => handleNavigation("/car-page")}
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
      >
        <Badge badgeContent={cart.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default CarIcon;
