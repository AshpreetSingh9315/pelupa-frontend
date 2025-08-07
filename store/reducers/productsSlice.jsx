import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  product : [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadData: (state, actions) => {
      state.data = actions.payload;
    },
    loadProduct: (state, actions) => {
      state.product = actions.payload;
    },
  },
});

export const { loadData , loadProduct } = productSlice.actions;
export default productSlice.reducer;
