import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../slices/contentSlice";
const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

export default store;
