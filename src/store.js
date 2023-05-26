import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/userSlice";
import productSlice from "./features/products/productSlice";
export const store = configureStore({
  reducer: {
    users: usersReducer,
    data2: productSlice,
  },
});
