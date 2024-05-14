import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Box,
  ListItem,
  ListItemIcon,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const useListPage = () => {
  const [stateDrawer, setStateDrawer] = useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setStateDrawer({ ...stateDrawer, ["left"]: open });
  };
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "Category", "Car Shop", "Delivery"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton 
            onClick={() => handleNavigation(`/${text}`)}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  const { categorysList: dataCategorys } = useLoaderData();

  //state
  const [dataCategorysList, setDataCategorysList] = useState(dataCategorys);

  return {
    list,
    dataCategorysList,
    toggleDrawer,
    stateDrawer,
  };
};

export default useListPage;
