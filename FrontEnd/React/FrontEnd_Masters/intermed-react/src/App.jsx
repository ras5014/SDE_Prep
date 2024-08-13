import { useState } from "react";
import UseRef from "./components/hooks/UseRef";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Revision APP</h1>
      <UseRef />
    </>
  );
}

export default App;
