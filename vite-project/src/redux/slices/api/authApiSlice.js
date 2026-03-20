import { userUrl } from "../../../utils/contants.js";
import { apiSlice } from "../apiSlice.js";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${userUrl}/login`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${userUrl}/register`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${userUrl}/logout`,
                method: "POST",
                credentials: "include",
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApiSlice;