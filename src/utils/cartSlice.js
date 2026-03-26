import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      //mutating the state here
      state.items.push(action.payload);
    },
    removeItemFromCart(state) {
      state.items.pop();
    },
    clearCart(state) {
      /*Here we are not reassigning the state, but we are mutating the existing state object by changing its properties. 
      This is allowed in Redux Toolkit because it uses Immer under the hood to handle immutability.*/
      /* state = ["empty"];  
      But here we are reassigning the state, which is not allowed in Redux Toolkit. 
      This will not work as expected because it does not mutate the existing state object but instead tries to replace it, 
      which is not how Redux Toolkit's createSlice is designed to handle state updates.
      
      RTK allows to either mutate or return a new state object e.g return {items: []} */
      state.items.length = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;
