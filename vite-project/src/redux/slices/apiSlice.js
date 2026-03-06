import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = "http://localhost:8800/api";

const baseQuery = fetchBaseQuery({ baseUrl: apiUrl });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: [],
    endpoints: (builder) => ({}),
})