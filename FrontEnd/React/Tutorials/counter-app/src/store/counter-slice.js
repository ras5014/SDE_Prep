import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    reset: (state) => {
      state.value = 0;
    },
    add: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset, add } = counterSlice.actions;
export default counterSlice.reducer;
