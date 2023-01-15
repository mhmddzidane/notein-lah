import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tabRedux from "./tabRedux";
import userRedux from "./userRedux";

const rootReducer = combineReducers({ user: userRedux, tab: tabRedux });

export const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
