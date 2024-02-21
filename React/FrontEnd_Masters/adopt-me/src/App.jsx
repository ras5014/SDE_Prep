import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/query-core";
import "./App.css";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  }
});


function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <Link to="/">
        <header><h1>Adopt Me!</h1></header>
      </Link>
      <Routes>
        <Route path="/" element={<SearchParams />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
