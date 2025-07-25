import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    loadData: (state, actions) => {
      state.data = actions.payload;
    },
  },
});

export const { loadData } = categorySlice.actions;
export default categorySlice.reducer;
