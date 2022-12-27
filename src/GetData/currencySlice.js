import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_CURRENCY } from './urls'
export const currencySlice = createApi({
  reducerPath: "currencySlice",
  baseQuery: fetchBaseQuery({
    baseUrl: URL_CURRENCY,
  }),
  endpoints: (builder) => ({
    getCurrency: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetCurrencyQuery } = currencySlice;