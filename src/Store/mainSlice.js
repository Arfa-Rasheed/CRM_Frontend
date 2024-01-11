import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    showLoader: false,
  },
  reducers: {
    showLoader: (state) => {
      state.showLoader = true;
    },
    hideLoader: (state) => {
      state.showLoader = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  showLoader,
  hideLoader,
} = mainSlice.actions;

export default mainSlice.reducer;
