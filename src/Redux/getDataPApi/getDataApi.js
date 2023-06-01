import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://instacloneapi.onrender.com/getpost",
  }),
  endpoints(builder) {
    return {
      fetchData: builder.query({
        query: () => "/get",
      }),
      //post request
      postFormData: builder.mutation({
        query: (formData) => ({
          url: "/post",
          method: "POST",
          body: formData,
        }),
        invalidatesTags: ["Post"],
      }),
    };
  },
});

export const { useFetchDataQuery, usePostFormDataMutation } = getApiSlice;
