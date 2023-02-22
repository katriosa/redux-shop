import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowCart: false,
  quantity: 0,
  totalprice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isShowCart = !state.isShowCart;
    },
    increment(state, action) {
      state.quantity = state.quantity + action.payload;
      state.totalprice = state.totalprice + action.payload;
    },
    decrement(state, action) {
      state.quantity = state.quantity - action.payload;
      state.totalprice = state.totalprice - action.payload;
    },
  },
});

const store = configureStore({ reducer: cartSlice.reducer });

export default store;
export const cartActions = cartSlice.actions;
