import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const HOST = import.meta.env.VITE_HOST;

export const budgetBuddyApi = createApi({
  reducerPath: "budgetBuddyApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${HOST}/` }),
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
