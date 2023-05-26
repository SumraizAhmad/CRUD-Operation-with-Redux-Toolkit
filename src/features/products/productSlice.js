import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addData } = productSlice.actions;
export default productSlice.reducer;
