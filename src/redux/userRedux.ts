import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: null,
    success: false,
    msg: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.success = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.success = true;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.success = false;
      state.error = action.payload;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.success = true;
      state.currentUser = action.payload;
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.success = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
      sessionStorage.removeItem("token");
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logoutSuccess,
} = userSlice.actions;
export default userSlice.reducer;
