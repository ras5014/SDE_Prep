import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">
        <header>Adopt Me!</header>
      </Link>
      <Routes>
        <Route path="/" element={<SearchParams />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
