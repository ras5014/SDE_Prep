import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
  const [value, setValue] = useState(0);
  return (
    <CounterContext.Provider value={{ value, setValue }}>
      {props.children}
    </CounterContext.Provider>
  );
};
