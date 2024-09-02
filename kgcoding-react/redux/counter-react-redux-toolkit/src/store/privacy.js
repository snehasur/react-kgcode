import { createSlice } from "@reduxjs/toolkit";
const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state, action) => {
      console.log(state, action);
      //state.privacy = !state.privacy;
      return state = !state;
    },
  },
})
export const privacyActions = privacySlice.actions;
export default privacySlice;