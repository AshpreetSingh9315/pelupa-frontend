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
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        state.cart[itemIndex].quantity = action.payload.quantity;
      } else {
        state.cart.push({ ...action.payload });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { openCart, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
