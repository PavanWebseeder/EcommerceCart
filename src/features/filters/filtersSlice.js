import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category:'All',
    maxPrice:10000
};

const filterSlice = createSlice({
    name:'filters',
    initialState,
    reducers:{
        setCategory:(state,action) =>{
            state.category = action.payload;
        },
        setMaxPrice:(state,action) =>{
            state.maxPrice = action.payload;
        }
    }
});

export const { setCategory,setMaxPrice } = filterSlice.actions;

export default filterSlice.reducer;