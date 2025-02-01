import React from "react";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import performance from '../assets/images/performance.png';
import health from '../assets/images/health.png';
import focus from '../assets/images/focus.png';
import yoga from '../assets/images/yoga.png';
import { customStyles } from "./styles";


const cards = [
  {
    image: yoga, 
    title: "See Your Breathing in Action",
    description:
      "Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance ",
  },
  {
    image: focus, 
    title: "Monitor Your Progress and Focus",
    description:
      "Track your breathing efficiency over time. By measuring your CO2 levels, the CapnoTrainer® GO provides real-time data to help you optimize.",
  },
  {
    image: performance, 
    title: "Receive Tailored Feedback",
    description:
      "Get personalized feedback to improve your breathing. Practical exercises help realign your breath for optimal benefits.",
  },
  {
    image: health, 
    title: "Receive Tailored Feedback",
    description:
      "Get personalized feedback to improve your breathing. Practical exercises help realign your breath for optimal benefits.",
  },
];

const Section5 = () => {
  return (
    <Box
      sx={customStyles.section5back}
    >
      <Typography
        sx={customStyles.section5head}
      >
        WHAT CAN THE CAPNOTRAINER® GO DO FOR YOU ? 
      </Typography>
      <Container sx={{my:8}}>
        <Grid container spacing={3} justifyContent="center">
          {cards.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card key={index} sx={{ maxWidth: 350, boxShadow: 3 }}>
            <img src={item.image} alt={item.title} style={{ width: "100%"}} />
            <CardContent sx={{background:"#247d98c7",color:"#fff"}}>
              <Typography variant="h6" fontWeight="bold" >
                {item.title}
              </Typography>
              <Typography variant="body2" textAlign="center">{item.description}</Typography>
            </CardContent>
          </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Section5;
