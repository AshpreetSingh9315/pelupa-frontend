import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cart: [],
  isActive: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state, action) => {
      state.isActive = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload); // ✅ just add the new item
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { openCart, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
