import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Box, CardMedia, Container } from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export const ComplexITem = ( {image, precio, title, subtitle, descripcion }) => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
        {/* <Img width={180} alt="complex" src={image} />
         */}
         <Box fixed maxWidth={310}>
          
            <Img alt="complex" src={image} />
          

         </Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                { title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                { subtitle }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                { descripcion }
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              { precio }
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

