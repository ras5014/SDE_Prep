import "./App.css";
import Header from "./components/Header";
import InputCity from "./components/InputCity";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <InputCity />
    </QueryClientProvider>
  );
}

export default App;
