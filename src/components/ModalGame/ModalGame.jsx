import { Box, IconButton, Modal, Tooltip, Typography } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';

const CustoModal = ({
  open,
  onClose,
  title,
  children,
  titleColor = "success",
  minWidth = "60vw",
  minHeight = "70vh",
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          height: "90%",
          overflowY: "scroll",
          p: 2,
          borderRadius: 3,
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#d1d1d1",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#a7a7a7",
            borderRadius: "6px",
          },
          minHeight,
          minWidth,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography
            {...{
              variant: "h4",
              fontWeight: "bold",
              
                color: titleColor,
            }}
          >
            {title}
          </Typography>
          <div onClick={onClose}>
            <IconButton color="success" size="large">
              <Tooltip title="Cerrar">
                <CloseIcon sx={{ color: titleColor }} />
              </Tooltip>
            </IconButton>
          </div>
        </div>
        <div>{children}</div>
      </Box>
    </Modal>
  );
};

export default CustoModal;
