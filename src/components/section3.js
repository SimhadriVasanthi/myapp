import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import breathing from '../assets/images/breathing.png';
import tailored from '../assets/images/tailored.png';
import monitor from '../assets/images/monitor.png';
import { customStyles } from "./styles";

const cards = [
  {
    image: breathing, 
    title: "See Your Breathing in Action",
    description:
      "Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals.",
  },
  {
    image: monitor, 
    title: "Monitor Your Progress",
    description:
      "Track your breathing efficiency over time. By measuring your CO2 levels, the CapnoTrainer® GO provides real-time data to help you optimize your respiration.",
  },
  {
    image: tailored, 
    title: "Receive Tailored Feedback",
    description:
      "Get personalized feedback to improve your breathing. Practical exercises help realign your breath for optimal benefits.",
  },
];

const Section3= () => {
  return (
    <Box sx={customStyles.section3back}>
      <Typography  fontWeight="bold"  textAlign="center">
        EXPERIENCE THE  
      <Typography sx={customStyles.section3head}>POWER OF CAPNOTRAINER® GO</Typography>
      </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={3}>
      <Grid container spacing={3} justifyContent="center" >
          {cards.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card key={index} sx={{boxShadow: 3 }}>
            <img src={item.image} alt={item.title} style={{ width: "100%", height: "auto" }} />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" color="#247d98c7">
                {item.title}
              </Typography>
              <Typography variant="body2" color="#00000094">{item.description}</Typography>
            </CardContent>
          </Card>
          </Grid>
        ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Section3;
