import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";

const userTestimonials = [
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name: "Remy Sharp",
    occupation: "Gamer Profesional",
    testimonial:
      "La tienda tiene un espacio  muy comodo, la atencion es muy buena, " +
      "te colaboran con cualquier duda que tengas sobre videojuegos, 10/10 " +
      "los arreglos que ellos hacen, de echo siempre que tengas alguna duda ellos te colaboran",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
    name: "Travis Howard",
    occupation: "Lol gamer",
    testimonial:
      "Los encontré por google y la verdad  super recomendado para MMTOS y reparaciones de consolas. servicio 10/5 con los ojos cerrados los recomiendo.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
    name: "Cindy Baker",
    occupation: "Estudiante",
    testimonial:
      "Tiene una atmósfera gamer que lo hace un lugar encantador, son puntuales en las entregas de las reparaciones y son muy amables en la atención.",
  },
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
    name: "Julia Stewart",
    occupation: "UX Designer",
    testimonial:
      "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/5.jpg" />,
    name: "John Smith",
    occupation: "CEO",
    testimonial:
      "Buen servicio, y maravillosa atención, siempre que tengo problemas con mis consolas o juegos acudo a ellos y siempre me han dado una solución rápida y eficaz.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
    name: "Daniel Wolf",
    occupation: "COD Gamer",
    testimonial:
      "Excelente servicio, ya he comprado varios juegos una consola y la calidad excelente, no he tenido problemas y siempre dan una buena atención",
  },
];

const Testimonios = () => {
  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 25 },
        pb: { xs: 8, sm: 16 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          Testimonials
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Vea lo que a nuestros clientes les encanta de nuestros productos.
          Descubra cómo nos destacamos en eficiencia, durabilidad y
          satisfacción. Únase a nosotros para disfrutar de calidad, innovación y
          soporte confiable.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonios;
