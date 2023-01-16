import { createSlice } from "@reduxjs/toolkit";
import { Tab } from "../types";

const initialState: Tab = {
  activeTab: "aktif",
  sideBar: false,
};

const tabSlice = createSlice({
  name: "tab",
  initialState: initialState,
  reducers: {
    changeTab: (state, action) => {
      state.activeTab = action.payload;
    },
    mobileTab: (state, action) => {
      state.sideBar = action.payload;
    },
  },
});

export const { changeTab, mobileTab } = tabSlice.actions;
export default tabSlice.reducer;
