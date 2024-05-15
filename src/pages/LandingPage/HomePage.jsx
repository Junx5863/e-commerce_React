// import AppBar from  "../../components/AppBar/AppBar";
import AppBarPage from "../../components/AppBar/AppBarComponent";
import Hero from "../../components/Hero/Hero";
import Testimonios from "../../components/Testimonios/Testimonios";
import ProductoStandar from "../../components/Producto/ProductoStandar";
import { useRef } from "react";

const HomePage = () => {
  const refHero = useRef(); //-> null para un estado inicial
  const refTest = useRef();
  const refProduct = useRef();

  const handlerRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <AppBarPage
        handlerRef={handlerRef}
        refs={{ refHero, refTest, refProduct }}
      ></AppBarPage>
      <div ref={refHero}>
        <Hero></Hero>
      </div>
      <div ref={refTest}>
        <Testimonios></Testimonios>
      </div>
      <div ref={refProduct}>
        <ProductoStandar></ProductoStandar>
      </div>
    </div>
  );
};

export default HomePage;
