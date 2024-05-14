import { Box, Container, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouteError } from "react-router-dom";
import errorImage from "../../assets/error_page.jpg";
import { BorderAllRounded, BorderRight } from "@mui/icons-material";

const ErrorPage = () => {
  const errorData = useRouteError();

  const [error, setError] = useState({
    status: 404,
    message: "Page not found",
  });

  useEffect(() => {
    setError({
      status: errorData.status,
      message: errorData.message,
    });
  }, [errorData]);
  console.log(errorData);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h1" sx={{ fontWeight: "Bold" }}>
              {errorData.status}
            </Typography>
            <Typography variant="h6" sx={{ paddingTop: 5 }}>
              {errorData.data || "ha ocurrido un error"}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img src={errorImage} style={
              {
                borderRadius: 10
              }
            } alt="" width={600} height={350} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ErrorPage;
