import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    deletecount: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { increment, decrement, deletecount } = counterSlice.actions;

export default counterSlice.reducer;
