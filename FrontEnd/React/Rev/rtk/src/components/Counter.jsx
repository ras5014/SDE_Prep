import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(increment());
  };

  const subtract = () => {
    dispatch(decrement());
  };

  const addValue = (val) => {
    dispatch(incrementByValue(val));
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={() => addValue(3)}>+3</button>
    </>
  );
};

export default Counter;
