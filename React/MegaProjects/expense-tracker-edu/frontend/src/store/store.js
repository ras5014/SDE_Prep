import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import { budgetBuddyApi } from "./api-service";

const store = configureStore({
  reducer: {
    user: userReducer,
    [budgetBuddyApi.reducerPath]: budgetBuddyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(budgetBuddyApi.middleware),
});

export default store;
