import { createSlice } from "@reduxjs/toolkit";
import { Counter } from "../types";

const initialState: Counter = {
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state) => {
      state.quantity += 1;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
