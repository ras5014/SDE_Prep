import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { petsApi } from "./services/pets";

export const store = configureStore({
    reducer: {
        [petsApi.reducerPath]: petsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(petsApi.middleware),
});

setupListeners(store.dispatch);

