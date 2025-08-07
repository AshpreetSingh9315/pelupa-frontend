import { configureStore } from "@reduxjs/toolkit";
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