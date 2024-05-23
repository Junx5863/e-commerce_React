import { Box, Grid, Typography, Drawer } from "@mui/material";
import { json } from "react-router-dom";
import useListPage from "./useListPages";

import { getCategorys } from "../../core/server/services_index";
import RecipeReviewCard from "../../components/CardGame/CardGame";

import AppBarPageGames from "../../components/AppBar/AppBarGamePage";
import { useRef } from "react";

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

const HomePage = () => {
  const xboxseries = useRef(); //-> null para un estado inicial
  const playStation = useRef();

  const handlerRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { dataCategorysList } = useListPage();
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
              <Typography variant="h4">Xbox - Series X/S</Typography>
            </Box>

            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={2}>
                {dataCategorysList.map((value) => {
                  if (value.type == "xbox") {
                    return (
                      <Grid key={value.id} item>
                        <RecipeReviewCard
                          name={value.name}
                          date={value.date}
                          image={value.image}
                          description={value.description}
                        />
                      </Grid>
                    );
                  }
                })}
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
                {dataCategorysList.map(
                  (value) =>
                    {
                      if (value.type == "playStation") {
                        return (
                          <Grid key={value.id} item>
                            <RecipeReviewCard
                              name={value.name}
                              date={value.date}
                              image={value.image}
                              description={value.description}
                            />
                          </Grid>
                        );
                      }
                    }
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
