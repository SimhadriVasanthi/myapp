import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from '@mui/material';
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { customStyles } from './styles';

const Faqs = () => {
    const data = [
        {
            question:"How do I get started ?",
            answer:"Simply order from the site"
        },
        {
            question:"How do I get started ?",
            answer:"Simply order from the site"
        },
        {
            question:"How do I get started ?",
            answer:"Simply order from the site"
        },

    ]
  return (
    <div>
        <Box sx={customStyles.faqs}>
            <Typography fontSize="30px" fontWeight="bold" textAlign="center">FAQS</Typography>
        <Grid container spacing={4} sx={{ padding: { lg: "0 6rem" } }}>
          <Grid item xs={12} md={12} sx={{ display: "flex", justifyContent: "start", flexDirection: "column" }}>
            {data?.map((faq, index) => {
              return (
                <Accordion
                  key={index}
                  sx={customStyles.accordian}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#14938ffa",fontSize:"2.5rem" }} />}
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`}
                    sx={{
                      "& .MuiAccordionSummary-content": {
                        display: "flex", gap: "1rem", alignItems: "center"
                      }
                    }}
                  >
                    <Typography color="#14938ffa" fontWeight="600">
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails >
                    <Typography>
                      {faq?.answer || "No answer available"}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            }) }
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Faqs