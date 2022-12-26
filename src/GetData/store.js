import { newsSlice } from "./newsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [newsSlice.reducerPath]: newsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsSlice.middleware),
});
