import { configureStore } from "@reduxjs/toolkit";
import filterReducer from '../features/filters/filtersSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        filters:filterReducer
    }
});