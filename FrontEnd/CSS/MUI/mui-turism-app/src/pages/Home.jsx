import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TourCard from "../components/TourCard";
import { Typography } from "@mui/material";
import cities from "../data.json";

const Home = () => {
  return (
    <div className="App">
      <Container sx={{ marginTop: 5 }}>
        {cities.map((city) => (
          <React.Fragment key={city.id}>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </Grid>
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
};

export default Home;
