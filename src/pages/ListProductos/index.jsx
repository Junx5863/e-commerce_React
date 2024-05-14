import { Box, Grid, Typography, Drawer } from "@mui/material";
import { json } from "react-router-dom";
import useListPage from "./useListPages";

import { getCategorys } from "../../core/server/services_index";
import RecipeReviewCard from "../../Components/CardGame/CardGame";

import AppBarPageGames from "../../Components/AppBar/AppBarGamePage";
import { useRef } from "react";

export const loader = async () => {
  try {
    const categorysList = await Promise.all([getCategorys()]);
    console.log({ categorysList });
    return json({ categorysList });
  } catch (error) {
    throwErrorPage({
      status: 401,
    });
  }
};

const HomePage = () => {
  const xboxseries = useRef(); //-> null para un estado inicial
  const playStation = useRef();
  
  const handlerRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { dataCategorysList,  } = useListPage();
  return (
    <>
      <AppBarPageGames 
      refs={{ xboxseries, playStation }}
      handlerRef={handlerRef}
      />

      {/* Drawer */}
      

      <Box
        sx={{
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: "20px",
          borderRadius: "10px",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Typography variant="h3">Categorias</Typography>

        <div ref={xboxseries}>
          <Grid
            sx={{ flexGrow: 1, marginTop: 5, marginTop: 10 }}
            container
            spacing={2}
          >
            <Box
              sx={{
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "20px",
                borderRadius: "10px",
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                marginLeft: "30px",
              }}
            >
              <Typography variant="h4">Xbox - Series x/s - one</Typography>
            </Box>

            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={2}>
                {dataCategorysList.map((value) =>
                  value["xbox"].map((valueItem) => (
                    <Grid key={valueItem.id} item>
                      <RecipeReviewCard
                        name={valueItem.name}
                        date={valueItem.date}
                        image={valueItem.image}
                        description={valueItem.description}
                      />
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>
          </Grid>
        </div>

        <div ref={playStation}>
          <Grid
            sx={{ flexGrow: 1, marginTop: 5, marginTop: 10 }}
            container
            spacing={2}
          >
            <Box
              sx={{
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "20px",
                borderRadius: "10px",
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                marginLeft: "30px",
              }}
            >
              <Typography variant="h4">Play Station 4 - 5</Typography>
            </Box>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={2}>
                {dataCategorysList.map((value) =>
                  value["playStation"].map((valueItem) => (
                    <Grid key={valueItem.id} item>
                      <RecipeReviewCard
                        name={valueItem.name}
                        date={valueItem.date}
                        image={valueItem.image}
                        description={valueItem.description}
                      />
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default HomePage;
