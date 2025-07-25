import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const peoductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadData: (state, actions) => {
      state.data = actions.payload;
    },
  },
});

export const { loadData } = peoductSlice.actions;
export default peoductSlice.reducer;
