import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import cartReducer from "./reducers/cartSlice";
import categoryReducer from "./reducers/categorySlice";
import productReducer from "./reducers/productsSlice";

export const store = configureStore({
    reducer : {
        category : categoryReducer,
        product : productReducer,
        cart : cartReducer,
    }
})