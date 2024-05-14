
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Avatar,
  IconButton,
  Typography,
  Fab,
} from "@mui/material";
import { red } from "@mui/material/colors";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustoModal from "../ModalGame/ModalGame";

const RecipeReviewCard = ({ name, date, image, description, onClose, open,  }) => {
  


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
          <IconButton aria-label="add to favorites">
            <AddShoppingCartIcon />
          </IconButton>
          <Fab
            size="small"
            sx={{ marginLeft: "auto", padding: 1.5 }}
            variant="extended"
          >
            <Typography variant="overline">Mas Detalles</Typography>
          </Fab>
        </CardActions>
      </Card>
      {/* <CustoModal
        open={true}
        // onClose={}
        title={''}

      ></CustoModal> */}
    </div>
  );
};

export default RecipeReviewCard;
