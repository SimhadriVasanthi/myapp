import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div style={{margin:"3rem 0"}}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography sx={{ fontSize: "30px", color: "#06585899" }} fontWeight="bold">
              Breathe Matters
            </Typography>
            <Typography color="#00000094"  sx={{width:"65%"}}>
              Join us on a journey towards a healthier, balanced life - where
              each inhale and exhale contributes to your overall sense of
              wellness.
            </Typography>
          </Grid>
          <Grid item xs={4} md={3}>
            <Typography fontWeight="bold" fontSize="20px">Contact</Typography>
            <Typography color="#00000094" >Phone</Typography>
            <Typography color="#00000094" >Email</Typography>
            <Typography color="#00000094" >Location</Typography>
          </Grid>
          <Grid item xs={6} md={3} sx={{float:"right"}}>
            <Typography fontSize="20px" fontWeight="bold">Stay on Touch</Typography>
            <Box sx={{display:"flex",gap:"10px",mt:1}}>
            <img src="https://vectorified.com/images/instagram-icon-url-16x16-24.jpg" alt="insta" style={{width:"30px"}}/>
            <img src="https://static.vecteezy.com/system/resources/previews/027/395/710/original/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png" alt="insta" style={{width:"30px"}}/>
            <img src="https://icon-library.com/images/facebook-icon-for-website/facebook-icon-for-website-20.jpg" alt="insta" style={{width:"30px"}}/>
            <img src="https://tse3.mm.bing.net/th?id=OIP.-aevSuwKiTG2C4rfVhNWhAHaHa&pid=Api&P=0&h=180" alt="insta" style={{width:"30px"}}/>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Typography textAlign="center" mt={5}>@2024 BreatheMatters all rights reserved</Typography>
    </div>
  );
};

export default Footer;
