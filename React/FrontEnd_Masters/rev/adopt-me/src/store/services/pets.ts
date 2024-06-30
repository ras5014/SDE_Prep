import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const petsApi = createApi({
  reducerPath: "petsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://pets-v2.dev-apis.com/`}),
  endpoints: (builder) => ({
    getBreeds: builder.query({
      query: (animal) => `breeds?animal=${animal}`,
      transformResponse: (response) => response.breeds,
    }),
    getPets: builder.query({
      query: ({location, animal, breed}) => `pets?animal=${animal}&location=${location}&breed=${breed}`
      
    }),
  })
});

export const { useGetBreedsQuery, useGetPetsQuery } = petsApi;