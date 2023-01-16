import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    isFetching: false,
    error: false,
    notes: null,
  },
  reducers: {
    getNotesStart: (state) => {
      state.isFetching = true;
    },
    getNotesSuccess: (state, action) => {
      state.isFetching = false;
      state.notes = action.payload;
    },
    getNotesFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getNotesStart, getNotesSuccess, getNotesFail } =
  notesSlice.actions;
export default notesSlice.reducer;
