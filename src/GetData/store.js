import { newsSlice } from "./newsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { currencySlice } from "./currencySlice";

export const store = configureStore({
  reducer: {
    [newsSlice.reducerPath]: newsSlice.reducer,
    [currencySlice.reducerPath]: currencySlice.reducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsSlice.middleware).concat(currencySlice.middleware),
});
