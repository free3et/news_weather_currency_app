import { newsSlice } from "./newsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { currencyApi } from "./currencySlice";
export const store = configureStore({
  reducer: {
    [newsSlice.reducerPath]: newsSlice.reducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsSlice.middleware).concat(currencyApi.middleware),
});

