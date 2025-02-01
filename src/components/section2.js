import { Box, Container, Grid, Typography } from "@mui/material";
import disrupt from '../assets/images/disrupt.png';
import existing from '../assets/images/existing.png';
import Compromise from '../assets/images/compromise.png';
import React from "react";
import breath from "../assets/images/breath.png";
import { customStyles } from "./styles";

const Section2 = () => {
  const data = [
    {
      icon: <img src={Compromise} alt="disrupt" style={{width:"30px",mr:2}}/>,
      title: "Compromise your health:",
      description: "Triggering anxiety, fatigue, and physical discomfort.",
    },
    {
      icon: <img src={disrupt} alt="disrupt" style={{width:"30px",mr:2}}/>,
      title: "Disrupt your performance:",
      description:
        "Causing focus deficits, memory issues, and suboptimal endurance.",
    },
    {
      icon: <img src={existing} alt="disrupt" style={{width:"30px",mr:2}}/>,
      title: "Exacerbate existing conditions:",
      description:
        "Like asthma, chronic pain, and even stress-related disorders.",
    },
  ];
  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Typography
        sx={customStyles.section2head}
      >
        DISCOVER THE HIDDEN POWER OF YOUR BREATH
      </Typography>

      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={breath}
              alt="Meditation"
              sx={{
                width: "100%",
                height:"500px"
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={customStyles.background}
          >
            <Box sx={{ pl: 2 }}>
              <Typography variant="body1">
                Your breathing isn’t just about oxygen in and carbon dioxide
                out—it’s a complex behavior shaped by triggers, habits, and
                physiology. When misaligned, these habits can:
              </Typography>
              <Box mt={3}>
                {data?.map((item, index) => (
                  <Box key={index} mt={index === 0 ? 0 : 3}>
                    <Box display="flex" alignItems="center" mb={1}>
                      {item.icon}
                      <Typography fontWeight="bold">{item.title}</Typography>
                    </Box>
                    <Typography variant="body1" sx={{ pl: 4 }}>
                      {item.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ bgcolor: "#5aa2a8", py: 3, marginTop:"45px" }}>
              <Typography
                variant="body1"
                color="white"
                sx={{ margin: "0 10px" }}
              >
                Millions of people suffer the consequences of poor breathing
                habits. But you don’t have to be one of them. With the{" "}
                <Typography component="span" fontWeight="bold">
                  CapnoTrainer® GO
                </Typography>
                , you’ll unlock a scientifically-backed pathway to breathing
                mastery.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section2;
