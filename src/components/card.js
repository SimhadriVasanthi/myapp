import { Button, Container, Typography } from "@mui/material";
import React from "react";

const Card = () => {
  return (
    <div style={{margin:"5rem 0"}}>
      <Container
        sx={{
          background: "#044e53",
          borderRadius: "10px",
          padding: "3rem",
          textAlign: "center",
          color: "#fff",
          display:"flex",
          justifyContent:"center",
          flexDirection:"column",
          gap:"1rem",
          alignItems:"center"
        }}
      >
        <Typography fontSize="1.5rem">DON'T WAIT</Typography>
        <Typography fontSize="1.85rem" fontWeight="bold">TRANSFORM YOUR BREATHING TODAY</Typography>
        <Typography textAlign="center">
          Your breath is your power.Take control with the CapnoTrainer GO,<br/> and
          experience life with greater clarity and vitality.
        </Typography>
        <Button sx={{
            background:"#fff",
            color:"#044e53",
            textTransform:"none",fontWeight:"600",fontSize:"1rem",p:1.5
        }}>Order Now and Start Your Breathing Journey!</Button>
      </Container>
    </div>
  );
};

export default Card;
