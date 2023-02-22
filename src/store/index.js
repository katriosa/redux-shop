import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowCart: false,
  quantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isShowCart = !state.isShowCart;
    },
    // incrementQuantity(state) {
    //   state.quantity++;
    // },
    // decrementQuantity(state) {
    //   if (state.quantity > 0) {
    //     state.quantity--;
    //   }
    // },
    // incrementTotal(state, action) {
    //   state.totalPrice = state.totalPrice + action.payload;
    // },
    // decrementTotal(state, action) {
    //   if (state.totalPrice > 0) {
    //     state.totalPrice = state.totalPrice - action.payload;
    //   }
    // },
    increment(state, action) {
      state.quantity++;
      state.totalPrice = state.totalPrice + action.payload;
    },
    decrement(state, action) {
      if (state.quantity > 0) {
        state.quantity--;
      }
      if (state.totalPrice > 0) {
        state.totalPrice = state.totalPrice - action.payload;
      }
    },
  },
});

const store = configureStore({ reducer: cartSlice.reducer });

export default store;
export const cartActions = cartSlice.actions;
