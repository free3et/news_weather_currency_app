import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsSlice = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (news) =>
        `top-headlines?country=${news.country}&category=${news.category}&apiKey=${
          import.meta.env.VITE_API_KEY_NEWS
        }`,
      method: "GET",
    }),
    getSearchPosts: builder.query({
      query: (search) => `everything?q=${search}&apiKey=${import.meta.env.VITE_API_KEY_NEWS}`,
      method: "GET",
    }),
    getTopPosts: builder.query({
      query: (country) =>
        `top-headlines?country=${country}&pageSize=2&apiKey=${import.meta.env.VITE_API_KEY_NEWS}`,
      method: "GET",
    }),
  }),
});

export const { useGetAllPostsQuery, useGetSearchPostsQuery, useGetTopPostsQuery } = newsSlice;
