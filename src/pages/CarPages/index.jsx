import React, { useContext, useRef } from "react";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Divider,
  TextField,
  Rating,
  Stack,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useCarPage from "./useCarPAge";
import AppBarCar from "../../components/AppBar/AppBarCar";
import AppBarPageGames from "../../components/AppBar/AppBarGamePage";
import AppBarCarPage from "../../components/AppBar/AppBarCar";

export const loader = async () => {
  try {
    const categorysList = await getCategorys();

    return json({ categorysList });
  } catch (error) {
    throwErrorPage({
      status: 401,
    });
  }
};

const CarPage = () => {
  const {
    dataCategorysList,
    handleRemoveFromCart,
    discountCode,
    handleDiscountCodeChange,
    cart,
    addProduct,
    calculateTotal,
    randomProducts,
  } = useCarPage();

  const xboxseries = useRef(); //-> null para un estado inicial
  const playStation = useRef();

  const handlerRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <AppBarCarPage
      />
    <Grid
      container
      spacing={2}
      sx={{ bgcolor: "#31363B", color: "#fff", minHeight: "100vh", padding: 2, marginTop: 10}}
    >
      <Grid item xs={12} md={8}>
        <Typography variant="h3" align="center" sx={{ mb: 2 }}>
          Mi carrito
        </Typography>
        <Grid container spacing={2}>
          {/* Solo debe mostrar tres items no mas */}
          {cart.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Card sx={{ display: "flex", mb: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 250, height: 200, objectFit: "cover", mr: 2 }}
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Grid
                    container
                    justifyItems="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={8}>
                      <Typography variant="h6" gutterBottom>
                        {item.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="right">
                      <IconButton
                        aria-label="Eliminar"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Grid
                    container
                    justifyItems="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={6}>
                      <Typography
                        sx={{ marginTop: 3 }}
                        variant="h6"
                        color="text.secondary"
                      >
                        {item.plat}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                      <Typography
                        sx={{ marginTop: 3 }}
                        variant="body2"
                        color="text.secondary"
                      >
                        Cantidad: {item.quantity}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
          
        </Grid>
        <Typography variant="h6" align="center" sx={{ mt: 2 }}>
          Basado en tus selecciones
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {randomProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.name}>
              <Card sx={{ maxWidth: 325 }}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", height: 350, objectFit: "cover" }}
                  image={product.image}
                  alt="Fortnite x Marvel: Zero War"
                />
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="body2" color="text.secondary">
                    DLC
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mt: "auto" }}>
                    {product.precio}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <FavoriteIcon sx={{ color: "#F56464", fontSize: 20 }} />
                    <Typography variant="caption" sx={{ fontSize: 12 }}>
                      {product.likes}
                    </Typography>
                  </Stack>
                  <IconButton
                    onClick={() =>
                      addProduct({
                        id: product.id,
                        name: product.name,
                        date: product.date,
                        image: product.image,
                        description: "DLC",
                        quantity: 1,
                        plat: parseFloat(product.precio),
                      })
                    }
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ border: "1px solid #6f7681" }}>
          <CardContent>
            <Typography variant="h6" align="center" sx={{ mb: 2 }}>
              Resumen
            </Typography>
            <Button variant="contained" sx={{ mb: 2, width: "100%" }}>
              Continuar con la compra
            </Button>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {cart.length} artículos
            </Typography>

            <Divider sx={{ mt: 1, mb: 1 }} />
            <Typography variant="h6" align="center" sx={{ mb: 1 }}>
              Total: {calculateTotal().toFixed(2)} USD
            </Typography>

            <TextField
              label="¿Tienes un código de descuento?"
              variant="outlined"
              size="small"
              sx={{ mt: 4, mb: 4, width: "80%" }}
              value={discountCode}
              onChange={handleDiscountCodeChange}
            />
            <Divider sx={{ mt: 1, mb: 1 }} />
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
              <Rating value={4} readOnly />
              <Typography variant="caption">Lee nuestras opiniones</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </>
  );
};
/**
 * {cart.map((value) => {
            return (
              <Grid key={value.id} item>
                <RecipeReviewCard
                  id={value.id}
                  name={value.name}
                  date={value.date}
                  image={value.image}
                  description={value.description}
                  plat={value.precio}
                  color={"success"}
                  typeButton={false}
                />
              </Grid>
            );
          })}
 */

export default CarPage;
