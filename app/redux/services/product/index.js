import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetFromLocalStorage } from "@/app/utils/helpers";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://alaba-gstm.onrender.com",
    prepareHeaders: (headers) => {
      // Get the token from the Redux store or localStorage
      const token = GetFromLocalStorage("Token");

      if (token) {
        // Set the Authorization header
        headers.set("Authorization", `Token ${token}`);
      }

      // Return the headers
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (businessEmail) => ({
        url: `/alabapi/products/${businessEmail}`,
        method: "GET",
      }),
    }),
    deleteProduct: builder.query({
      query: (businessEmail, id) => ({
        url: `/alabapi/products/${businessEmail}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useDeleteProductQuery } = productApi;
