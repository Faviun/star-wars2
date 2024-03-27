// reducerPath - ключ которое будет зарегистрированно в store
// baseQuery   - обьект выполняющий взаимодействие с API
// endpoints   - набор взаимойдействий с API
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const starWarsApi = createApi({
    reducerPath: "starWars",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://swapi.dev/api",
    }),
    endpoints: (builder) => ({
        getFilms: builder.query({
            query: () => `/films?format=json`,
        }),
        getFilmById: builder.query({
            query: (id) => `/films/${id}?format=json`,
        }),
        getPeoples: builder.query({
            query: (page) => `/people?page=${page}&format=json`,
        }),
    }),
});

export const { useGetFilmsQuery, useGetFilmByIdQuery, useGetPeoplesQuery } =
    starWarsApi;
