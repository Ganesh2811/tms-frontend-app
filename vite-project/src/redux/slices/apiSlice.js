import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = import.meta.env.VITE_APP_BASR_URL;

const baseQuery = fetchBaseQuery({ baseUrl: apiUrl + "/api" });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: [],
    endpoints: (builder) => ({}),
})