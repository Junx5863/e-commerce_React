import * as React from "react";
import { Box, alpha } from "@mui/material";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Juegos de Plataforma",
    description:
      "Disfruta de una amplia variedad de juegos de plataforma para todas las consolas.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Soporte las 24 horas",
    description:
      "Experience unmatched durability that goes above and beyond with lasting investment.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Gran experiencia de usuario",
    description:
      "Para mejorar la experiencia de usuario, nuestros juegos son fáciles de usar y de entender.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Juegos Innovadores",
    description:
      "Nuestros juegos son innovadores y te ofrecen una experiencia de juego única. la cual no encontraras en otro lugar.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Una Gran Comunidad",
    description:
      "Conectate con una comunidad de jugadores que comparten tus mismos gustos y pasiones por los videojuegos. ",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Juegos AAA",
    description:
      "Disfruta de una experiencia de juego AAA con los mejores juegos del mercado. para todas las consolas.",
  },
];

const ProductoStandar = () => {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Productos Estandar
          </Typography>
          <Typography variant="body1" sx={{ paddingTop: 2 }}>
            Explore por qué nuestro producto se destaca: adaptabilidad,
            durabilidad, diseño fácil de usar e innovación. Disfrute de un
            soporte al cliente confiable y Precisión en cada detalle.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={2}
                useFlexGap
                sx={{
                  p: 5,
                  height: "100%",
                  border: "1px solid",
                  boxShadow: `0 0 24px 12px ${alpha("#033363", 0.2)}`,
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductoStandar;
