import { createSlice } from "@reduxjs/toolkit";
import { Tab } from "../types";

const initialState: Tab = {
  activeTab: "aktif",
};

const tabSlice = createSlice({
  name: "tab",
  initialState: initialState,
  reducers: {
    changeTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { changeTab } = tabSlice.actions;
export default tabSlice.reducer;
