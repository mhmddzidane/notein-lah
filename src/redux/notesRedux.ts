import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    isFetching: false,
    error: false,
    notes: null,
    archivedNotes: null,
    status: null,
    statusArchive: null,
    postError: false,
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
    getArchivedNotesStart: (state) => {
      state.isFetching = true;
    },
    getArchivedNotesSuccess: (state, action) => {
      state.isFetching = false;
      state.archivedNotes = action.payload;
    },
    getArchivedNotesFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    PostArchivedNotesStart: (state) => {
      state.isFetching = true;
    },
    PostArchivedNotesSuccess: (state, action) => {
      state.isFetching = false;
      state.status = action.payload;
    },
    PostArchivedNotesFail: (state) => {
      state.isFetching = false;
      state.postError = true;
    },
    PostUnarchivedNotesStart: (state) => {
      state.isFetching = true;
    },
    PostUnarchivedNotesSuccess: (state, action) => {
      state.isFetching = false;
      state.statusArchive = action.payload;
    },
    PostUnarchivedNotesFail: (state) => {
      state.isFetching = false;
      state.postError = true;
    },
    PostNotesStart: (state) => {
      state.isFetching = true;
    },
    PostNotesSuccess: (state, action) => {
      state.isFetching = false;
      state.statusArchive = action.payload;
    },
    PostNotesFail: (state) => {
      state.isFetching = false;
      state.postError = true;
    },
  },
});

export const {
  getNotesStart,
  getNotesSuccess,
  getNotesFail,
  getArchivedNotesStart,
  getArchivedNotesSuccess,
  getArchivedNotesFail,
  PostArchivedNotesStart,
  PostArchivedNotesSuccess,
  PostArchivedNotesFail,
  PostUnarchivedNotesStart,
  PostUnarchivedNotesSuccess,
  PostUnarchivedNotesFail,
  PostNotesStart,
  PostNotesSuccess,
  PostNotesFail,
} = notesSlice.actions;
export default notesSlice.reducer;
