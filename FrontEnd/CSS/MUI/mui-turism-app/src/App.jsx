import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TourCard from "./components/TourCard";
import AppBar from "./components/AppBar";
import cities from "./data.json";

function App() {
  console.log(cities);
  return (
    <>
      <AppBar />
      <Container sx={{ marginTop: 5 }}>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </>
  );
}

export default App;
