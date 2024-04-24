import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import AppAppBar from "../../components/AppBar/AppBar";
import Hero from "../../components/Hero/Hero";
import Testimonios from "../../components/Testimonios/Testimonios";
import ProductoStandar from "../../components/Producto/ProductoStandar";



const LoadinPage = () => {
  return (
    <div>
      <AppAppBar></AppAppBar>
      <Hero></Hero>
      <Testimonios></Testimonios>
      <ProductoStandar></ProductoStandar>
    </div>
  );
};

export default LoadinPage;
