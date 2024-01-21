import { createSlice } from "@reduxjs/toolkit";

const uiSlice= createSlice({
    name: 'ui',
    initialState:{
        CartIsVisible :false
    },
    reducers:{
        toggle(state){
            state.CartIsVisible =!state.CartIsVisible;
        }
    }
});

export const uiActions =uiSlice.actions;

export default uiSlice;