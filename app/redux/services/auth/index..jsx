import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetFromLocalStorage } from "@/app/utils/helpers";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://alaba-gstm.onrender.com",
    prepareHeaders: (headers) => {
      // Get the token from the Redux store or localStorage
      const token = GetFromLocalStorage("Token");

      if (token) {
        // Set the Authorization header
        headers.set("Authorization", `Bearer ${token}`);
      }

      // Return the headers
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/alabapi/login/",
        method: "POST",
        body,
      }),
    }),
    getAnalytics: builder.query({
      query: (businessEmail) => ({
        url: `/alabapi/daily_sales_profits/${businessEmail}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useGetAnalyticsQuery } = authApi;
