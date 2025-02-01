import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import WavesIcon from "@mui/icons-material/Waves";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import BackpackIcon from "@mui/icons-material/Backpack";
import { customStyles } from "./styles";

const cards = [
  {
    image: <ConnectedTvIcon sx={customStyles.iconStyle}/>,
    title: "Real-Time Monitoring",
    description: "Gain an immediate understanding of your breathing patterns.",
  },
  {
    image: <WavesIcon sx={customStyles.iconStyle}/>,
    title: "Capnogram Visualization",
    description:
      "Track your breathing efficiency over time. By measuring your CO2 levels",
  },
  {
    image: <PublishedWithChangesIcon sx={customStyles.iconStyle}/>,
    title: "Custom Learning Plans",
    description: "Get personalized feedback to improve your breathing.",
  },
  {
    image: <BackpackIcon sx={customStyles.iconStyle}/>,
    title: "Interactive Practims",
    description: "Get personalized feedback to improve your breathing.",
  },
];

const Section4 = () => {
  return (
    <Box
      sx={customStyles.section4back}
    >
      <Typography
        sx={customStyles.section4head}
      >
        KEY FEATURES YOU'ILL LOVE
      </Typography>
      <Container sx={{my:8}}>
        <Grid container spacing={3} justifyContent="center" >
          {cards.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box sx={customStyles.section4img}>
                {item.image}
                <Typography
                  fontWeight="bold"
                  sx={{ mt:1 }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="#00000094" textAlign="center">{item.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Section4;
