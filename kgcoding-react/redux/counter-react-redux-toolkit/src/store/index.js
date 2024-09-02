//import { createStore } from "redux";
import {configureStore, createSlice} from '@reduxjs/toolkit';
import counterSlice from "./counter";
import privacySlice from "./privacy";
// const INITIAL_VALUE = {
//   counter: 0,
//   privacy: false,
// };
// const counterSlice = createSlice({
//   name: "counter",
//   initialState:{counterVal: 0},
//   reducers: {
//     increment: (state, action) => {
//       console.log(state, action);
//       //state.counterVal = state.counterVal + 1;
//       state.counterVal ++;
//     },
//     decrement: (state, action) => {
//       console.log(state, action);
//       //state.counterVal = state.counterVal - 1;
//       state.counterVal --;
//     },
//     add: (state, action) => {
//       console.log(state, action);
//       //state.counterVal = state.counterVal + action.payload.num;
//       state.counterVal += Number(action.payload);
//     },
//     subtract: (state, action) => {
//       console.log(state, action);
//       //state.counterVal = state.counterVal - action.payload.num;
//       state.counterVal -= Number(action.payload);
//     },
//   },
// });
// const privacySlice = createSlice({
//   name: "privacy",
//   initialState: false,
//   reducers: {
//     toggle: (state, action) => {
//       console.log(state, action);
//       //state.privacy = !state.privacy;
//       return state = !state;
//     },
//   },
// })
// const counterReducer = (store = INITIAL_VALUE, action) => {
//   console.log("action received", action);
//   if (action.type === "INCREMENT") {
//     // return { counter: store.counter + 1, privacy: store.privacy };
//     return { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     //return { counter: store.counter - 1, privacy: store.privacy };
//     return { ...store, counter: store.counter - 1 };
//   } else if (action.type === "ADD") {
//     // return {
//     //   counter: store.counter + Number(action.payload.num),
//     //   privacy: store.privacy,
//     // };
//     return { ...store, counter: store.counter + Number(action.payload.num) };
//   } else if (action.type === "SUBTRACT") {
//     // return {
//     //   counter: store.counter - Number(action.payload.num),
//     //   privacy: store.privacy,
//     // };
//     return { ...store, counter: store.counter - Number(action.payload.num) };
//   } else if (action.type === "TOGGLE") {
//     //return { counter: store.counter, privacy: !store.privacy };
//     return { ...store, privacy: !store.privacy };
//   }

//   return store;
// };
const couterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer
  }});
// export const counterActions = counterSlice.actions;
// export const privacyActions = privacySlice.actions;
export default couterStore;
