import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const budgetBuddyApi = createApi({
  reducerPath: "budgetBuddy",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  endpoints: (builder) => ({
    fetchBudget: builder.query({
      query: ({ userId, startDate, endDate }) => ({
        url: "getReportsData",
        method: "POST",
        body: {
          userId: userId,
          startDate: startDate,
          endDate: endDate,
        },
      }),
    }),
    fetchAllTransactions: builder.query({
      query: ({ userId, type }) => ({
        url: "getAllTransactions",
        method: "POST",
        body: {
          userId: userId,
          type: type,
        },
      }),
    }),
  }),
});

export const { useFetchBudgetQuery, useFetchAllTransactionsQuery } =
  budgetBuddyApi;
