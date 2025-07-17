import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    cart : [],
    isActive : false
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        openCart : (state, actions)=>{
            state.isActive = actions.payload
        }
    }
})

export const { openCart} = cartSlice.actions;
export default cartSlice.reducer;
