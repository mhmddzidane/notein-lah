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
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.success = true;
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.success = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      sessionStorage.removeItem("token");
    },
    getUserStart: (state) => {
      state.isFetching = true;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    getUserError: (state, action) => {
      state.error = action.payload;
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
  getUserStart,
  getUserSuccess,
  getUserError,
} = userSlice.actions;
export default userSlice.reducer;
