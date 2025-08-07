// import createslice
//initialise initial state
//slice --> name , mentions intial state , actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state,action){
      console.log(action);
      state.push(action.payload)
    },
    removeFromCart(state , action){
      //  state.pop(action.payload) we cant use this becoz it remove the elemet from rhe last not the exact matching take place here
       return state.filter((item) => item.id !== action.payload) // this will return the item whose id does not match with the removed item id
    }
  },
});
export const {addToCart , removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;

// when the addToCart function is called then the element is being added to array (initialState ) and pass the updated value
