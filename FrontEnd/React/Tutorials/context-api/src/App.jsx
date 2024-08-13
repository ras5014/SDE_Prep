import { useContext } from "react";
import "./App.css";
import Counter from "./components/Counter";

import { CounterContext } from "./context/Counter-Context";
import Item from "./components/Item";
import Cart from "./components/Cart";

function App() {
  const counterState = useContext(CounterContext);

  return (
    <>
      <h1>Product List</h1>
      <Item name={"MacBook Pro"} price={100000} />
      <Item name={"Pendrive"} price={4000} />
      <Item name={"IPhone"} price={70000} />

      <Cart />
    </>
  );
}

export default App;
