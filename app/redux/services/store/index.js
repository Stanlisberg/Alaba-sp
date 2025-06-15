import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetFromLocalStorage } from "@/app/utils/helpers";

export const storeApi = createApi({
  reducerPath: "storeApi",
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
    getSingleProducts: builder.query({
      query: ({ business_email, id }) => ({
        url: `/alabapi/products/${business_email}/${id}/`,
        method: "GET",
      }),
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: `/alabapi/products/${data.business_email}/`,
        method: "POST",
        body: data,
      }),
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `/alabapi/products/${data.business_email}/${data.id}/`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: ({ business_email, id }) => ({
        url: `/alabapi/products/${business_email}/${id}/`,
        method: "DELETE",
      }),
    }),
    getCategories: builder.query({
      query: (businessEmail) => ({
        url: `/alabapi/categories/${businessEmail}`,
        method: "GET",
      }),
    }),
    getSingleCategory: builder.query({
      query: ({ business_email, id }) => ({
        url: `/alabapi/categories/${business_email}/${id}/`,
        method: "GET",
      }),
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: `/alabapi/categories/${data.business_email}/`,
        method: "POST",
        body: data,
      }),
    }),
    updateCategory: builder.mutation({
      query: (data) => ({
        url: `/alabapi/categories/${data.business_email}/${data.categName}/`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteCategory: builder.mutation({
      query: ({ business_email, categName }) => ({
        url: `/alabapi/categories/${business_email}/${categName}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useGetSingleProductsQuery,
  useUpdateProductMutation,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useGetSingleCategoryQuery,
  useDeleteCategoryMutation,
} = storeApi;
