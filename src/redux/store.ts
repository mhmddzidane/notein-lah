import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterRedux from "./counterRedux";
import userRedux from "./userRedux";

const rootReducer = combineReducers({ user: userRedux, cart: counterRedux });

export const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
