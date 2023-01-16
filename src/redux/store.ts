import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tabRedux from "./tabRedux";
import userRedux from "./userRedux";
import notesRedux from "./notesRedux";

const rootReducer = combineReducers({
  user: userRedux,
  tab: tabRedux,
  notes: notesRedux,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
