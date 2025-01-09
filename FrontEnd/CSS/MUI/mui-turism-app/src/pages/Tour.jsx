import React from "react";
import {
  Typography,
  Container,
  Box,
  Paper,
  BottomNavigation,
} from "@mui/material";
import ImageCollage from "../components/imageCollage";
import CustomizedAccordions from "../components/Accordion";
import BasicModal from "../components/Modal";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>

      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhZUF5CdyI83JfGBv-yJ6-HJNtfU2pnZQkA&s"
          alt=""
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sit
          quod ipsum qui exercitationem illo fugit in vel fuga! Magni quaerat
          dolore maxime corrupti esse eos tenetur dolores deleniti quo, est,
          sint beatae, suscipit eligendi vel? Animi magnam minima veritatis.
        </Typography>
      </Box>
      <Box marginBottom={15}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation sx={{ backgroundColor: "#DFD3C3" }}>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
