import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState:{counterVal: 0},
  reducers: {
    increment: (state, action) => {
      console.log(state, action);
      //state.counterVal = state.counterVal + 1;
      state.counterVal ++;
    },
    decrement: (state, action) => {
      console.log(state, action);
      //state.counterVal = state.counterVal - 1;
      state.counterVal --;
    },
    add: (state, action) => {
      console.log(state, action);
      //state.counterVal = state.counterVal + action.payload.num;
      state.counterVal += Number(action.payload);
    },
    subtract: (state, action) => {
      console.log(state, action);
      //state.counterVal = state.counterVal - action.payload.num;
      state.counterVal -= Number(action.payload);
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice;
