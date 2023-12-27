import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
let cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    AddToCart(state, action) {
      //   state.cart.push(action.payload);
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((data) => data.id !== action.payload);
    },
    increaseItem(state, action) {
      const item = state.cart.find((data) => data.id === action.payload);
      item.quantity++;
      item.SubTotal = item.quantity * item.price;
    },
    decreaseItems(state, action) {
      const item = state.cart.find((data) => data.id === action.payload);
      if (item.quantity > 0) {
        item.quantity--;
        item.SubTotal = item.quantity * item.price;
      } else {
      }
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});
export const { clearCart, decreaseItems, increaseItem, deleteItem, AddToCart } =
  cartSlice.actions;
export default cartSlice.reducer;
