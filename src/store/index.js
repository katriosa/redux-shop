import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowCart: false,
  items: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isShowCart = !state.isShowCart;
    },

    increment(state, action) {
      state.quantity++;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    decrement(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.quantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

const store = configureStore({ reducer: cartSlice.reducer });

export default store;
export const cartActions = cartSlice.actions;
