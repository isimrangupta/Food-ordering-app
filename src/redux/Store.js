import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice"
import searchSlice from "./slices/searchSlice"

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: searchSlice,
  }
});

export default Store;