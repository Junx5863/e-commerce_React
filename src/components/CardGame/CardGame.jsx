import { useState } from "react";

import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Avatar,
  IconButton,
  Typography,
  Collapse,
  Stack,
  Chip,
  TextField,
  Grid,
  Divider,
  Box,
  Button,
} from "@mui/material";

import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import PaidIcon from "@mui/icons-material/Paid";
import RadioGroupRating from "./Components/Rating";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useCardGame from "./useCardGame";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeReviewCard = ({
  id,
  name,
  date,
  image,
  description,
  plat,
  color,
}) => {
  const {
    expanded,
    setExpanded,
    setIconChange,
    setChangeIcon,
    count,
    setCount,
    handleExpandClick,
    handledChangeIcon,
    addItem,
    removeItem,
    addCarItems,
  } = useCardGame();

  return (
    <div>
      <Card sx={{ maxWidth: 345, marginLeft: 4, marginBottom: 4 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {name[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={date}
        />
        <CardMedia component="img" height="194" image={image} alt={name} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {setIconChange ? (
            <IconButton
              aria-label="add to favorites"
              onClick={handledChangeIcon}
            >
              <AddShoppingCartIcon />
            </IconButton>
          ) : (
            <div>
              <Box display="flex" alignItems="center">
                <Button onClick={removeItem} variant="outlined" size="small">
                  -
                </Button>
                <Typography m={1}>{count}</Typography>
                <Button onClick={addItem} variant="outlined" size="small">
                  +
                </Button>
              </Box>
              {count >= 1 ? (
                <Button
                  onClick={() =>
                    addCarItems(
                      {
                        id,
                        name,
                        date,
                        image,
                        description,
                        plat,
                        color,
                      },
                      count
                    )
                  }
                >
                  Añadir al Carrito
                </Button>
              ) : null}
            </div>
          )}
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Divider sx={{ marginTop: 5, marginBottom: 2 }} textAlign="left">
              Detalles:
            </Divider>
            <Stack direction="row" spacing={2}>
              <Chip icon={<PaidIcon />} label={plat} color={color} />
              <Chip
                sx={{ fontSize: 13 }}
                icon={<FavoriteIcon sx={{ fontSize: 15 }} />}
                label={159}
                color={color}
              />
              <Chip
                sx={{ fontSize: 13 }}
                icon={<VisibilityIcon sx={{ fontSize: 15 }} />}
                label={"159.34k"}
                color={color}
              />
            </Stack>
            <Divider sx={{ marginTop: 5, marginBottom: 2 }} textAlign="left">
              Deja tu Comentario:
            </Divider>

            <Grid container direction={"column"} spacing={1}>
              <RadioGroupRating />
              <TextField
                sx={{ marginTop: 2 }}
                id="outlined-multiline-flexible"
                label="Como fue tu experiencia?"
                multiline
                maxRows={4}
              />
              <Box
                gridColumn="span 8"
                sx={{
                  marginTop: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Chip label="Enviar" onClick={() => console.log(name)} />
              </Box>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default RecipeReviewCard;
