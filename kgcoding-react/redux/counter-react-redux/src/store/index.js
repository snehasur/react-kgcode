import { createStore } from "redux";
const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};
const counterReducer = (store = INITIAL_VALUE, action) => {
  console.log("action received", action);
  if (action.type === "INCREMENT") {
    // return { counter: store.counter + 1, privacy: store.privacy };
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    //return { counter: store.counter - 1, privacy: store.privacy };
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    // return {
    //   counter: store.counter + Number(action.payload.num),
    //   privacy: store.privacy,
    // };
    return { ...store, counter: store.counter + Number(action.payload.num) };
  } else if (action.type === "SUBTRACT") {
    // return {
    //   counter: store.counter - Number(action.payload.num),
    //   privacy: store.privacy,
    // };
    return { ...store, counter: store.counter - Number(action.payload.num) };
  } else if (action.type === "TOGGLE") {
    //return { counter: store.counter, privacy: !store.privacy };
    return { ...store, privacy: !store.privacy };
  }

  return store;
};
const couterStore = createStore(counterReducer);
export default couterStore;
