import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";

import { Paper, Grid, Typography, Box, Rating } from "@mui/material";

// This is to add custom theme to inbuilt MUI component(look documentation)
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        { props: { variant: "body2" }, style: { fontSize: 11 } },
        { props: { variant: "body3" }, style: { fontSize: 9 } },
      ],
    },
  },
});
// end

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Link to={`/${tour.id}`} className="link">
          <Paper elevation={3}>
            <img className="tourImg" src={tour.image} alt="" />
            <Box marginX={1}>
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AccessTimeIcon sx={{ width: 12.5 }} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.duration} hours
                </Typography>
              </Box>
              <Box
                mt={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="read-only"
                  value={tour.rating}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.rating}
                </Typography>
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  ({tour.numberOfReviews})
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" component="h3" marginLeft={0.5}>
                  From ${tour.price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Link>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;

// Use Paper instead of Card
// sx will add custom css
// Add every inner element as a Box
// Typography to add text
