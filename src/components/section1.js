import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import mike from "../assets/images/mike.png";
import airway from "../assets/images/airway.png";
import conspire from "../assets/images/conspire.png";
import doctor from "../assets/images/doctor.png";
import physio from "../assets/images/physio.png";
import { customStyles } from "./styles";

const Section1 = () => {
  return (
    <>
      <Box
        sx={customStyles.section1background}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={customStyles.heading}>
                Breathe Matters
              </Typography>
              <Button
                variant="contained"
                sx={customStyles.btn}
              >
                Book Now
              </Button>
            </Grid>
            <Grid item xs={10}>
              <Typography
                // variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{ lineHeight: "1.7",fontSize: {xs:"20px",md:"30px"}, }}
              >
                TRANSFORM YOUR LIFE WITH THE REVOLUTIONARY CAPNOTRAINER® GO
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" mt={2} sx={{ fontSize: "1.7rem" }}>
                Breathe Smarter, Live Better
              </Typography>
              <Typography variant="body1" mt={2}>
                Breathing is more than just an unconscious action—it's a
                foundation of health, performance, and emotional well-being. But
                what if your breathing habits are silently holding you back?
                Enter the CapnoTrainer® GO, the groundbreaking tool that merges
                science, psychology, and technology to revolutionize your
                breathing habits and transform your life.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <Box
                component="img"
                src={mike}
                alt="CapnoTrainer GO"
                sx={customStyles.image}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my:3
          }}
        >
          <Box component="img" src={physio} alt="" sx={customStyles.section1img}/>
          <Box component="img" src={doctor} alt="" sx={{width:{md:"150px",xs:"100px"}}}/>

          <Box component="img" src={airway} alt="" sx={customStyles.section1img}/>
          <Box component="img" src={conspire} alt="" sx={customStyles.section1img}/>
        </Box>
      </Container>
    </>
  );
};

export default Section1;
