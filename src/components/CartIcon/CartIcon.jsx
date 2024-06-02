import { Box, IconButton, Badge } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { CartContext } from "../../core/context/CartContext";
import { useContext } from "react";

export const CartIcon = () => {
    
    
     const { cart } = useContext(CartContext);


  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <IconButton onClick={ () => getQuantity() } size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={ cart.length } color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  );
};
