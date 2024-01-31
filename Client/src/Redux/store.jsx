import { configureStore } from "@reduxjs/toolkit";
import problemReducer from "./Slices/randomSlice";
export const store = configureStore({
  reducer: {
    problems: problemReducer,
  },
});
