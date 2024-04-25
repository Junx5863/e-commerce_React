import * as React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  alpha,
} from "@mui/material";
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';

const dataImage = [
  {
    src: "public/blake-meyer-CRNbHjNaljo-unsplash.jpg",
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
    description: "4.21M views",
  },
];

export default function Hero() {
  return (
    <Box id="hero">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 10 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            Nuestros Ultimos &nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                // color: "#7f5af0"

                // (theme) =>
                //   theme.palette.mode === "dark"
                //     ? "primary.main"
                //     : "primary.light",
              }}
            >
              Productos
            </Typography>
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autocomplete: "off",
                ariaLabel: "Enter your email address",
              }}
            />
            <Button variant="contained" sx={{ background: "#7f5af0" }}>
              Start now
            </Button>
          </Stack>
        </Stack>
        <Box
          sx={{
            mt: { xs: 8, sm: 5 },
            alignSelf: "center",
            height: { xs: 200, sm: 600 },
            width: "80%",
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor: alpha("#9CCCFC", 0.1),
            boxShadow: `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          }}
        >
          <img
            src="public/gamePortada.jpg"
            alt=""
            style={{
            //   height: { xs: 200, sm: 400 },
              width: "100%",
              borderRadius: "10px",
              backgroundSize: "cover",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
