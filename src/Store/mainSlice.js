import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    isLoggedIn:false,
    showLoader: false,
    userdetail: {},
  },
  reducers: {
    showLoader: (state) => {
      state.showLoader = true;
    },
    hideLoader: (state) => {
      state.showLoader = false;
    },
    setUserDetail: (state, action) => {
      state.userdetail = action.payload;
    },
    setIsLoggedIn(state,action){
      state.isLoggedIn = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  showLoader,
  hideLoader,
  setUserDetail,
  setIsLoggedIn,
  
} = mainSlice.actions;

export default mainSlice.reducer;
