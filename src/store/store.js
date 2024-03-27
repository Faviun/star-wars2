import { configureStore } from '@reduxjs/toolkit'
import {starWarsApi} from "../api/api";

export const store = configureStore({
    reducer: {
        [starWarsApi.reducerPath]: starWarsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(starWarsApi.middleware)
})