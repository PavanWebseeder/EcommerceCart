import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:storedCart
    },
    reducers:{
        addToCart:(state,action)=>{
            state.items.push(action.payload);
            localStorage.setItem('cart',JSON.stringify(state.items));
        },
        removeToCart:(state,action) => {
            state.items = state.items.filter(item=>item.id !== action.payload);
            localStorage.setItem('cart',JSON.stringify(state.items));
        }
    }
});

export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;