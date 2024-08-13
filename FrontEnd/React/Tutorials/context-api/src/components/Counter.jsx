import React, { useContext } from "react";
import { CounterContext } from "../context/Counter-Context";

const Counter = () => {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => counterContext.setValue((prev) => prev + 1)}>
        +
      </button>
      <button onClick={() => counterContext.setValue((prev) => prev - 1)}>
        -
      </button>
    </div>
  );
};

export default Counter;
