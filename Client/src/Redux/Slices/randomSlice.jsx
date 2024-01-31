import { createSlice } from "@reduxjs/toolkit";
const problemSlice = createSlice({
  name: "Problems",
  initialState: [],
  reducers: {
    addProblem: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProblem } = problemSlice.actions;
export default problemSlice.reducer;
