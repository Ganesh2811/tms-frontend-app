import { userUrl } from "../../../utils/contants";
import { apiSlice } from "../apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${userUrl}/profile`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),

        getTeamLists: builder.query({
            query: () => ({
                url: `${userUrl}/get-team`,
                method: "GET",
                credentials: "include",
            }),
        }),

        getUserTaskStatus: builder.query({
            query: () => ({
                url: `${userUrl}/get-status`,
                method: "GET",
                credentials: "include",
            }),
        }),

        getNotifications: builder.query({
            query: () => ({
                url: `${userUrl}/notifications`,
                method: "GET",
                credentials: "include",
            }),
        }),

        deleteUser: builder.mutation({
            query: (id) => ({
                url: `${userUrl}/${id}`,
                method: "DELETE",
                credentials: "include",
            }),
        }),

        userAction: builder.mutation({
            query: (data) => ({
                url: `${userUrl}/${data?.id}`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),

        markNotiAsRead: builder.mutation({
            query: (data) => ({
                url: `${userUrl}/read-noti?isReadType=${data.type}&id=${data?.id}`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),

        changePassword: builder.mutation({
            query: (data) => ({
                url: `${userUrl}/change-password`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),
    }),
});

export const { 
    useUpdateUserMutation, 
    useGetTeamListsQuery, 
    useDeleteUserMutation, 
    useUserActionMutation, 
    useChangePasswordMutation, 
    useGetNotificationsQuery, 
    useMarkNotiAsReadMutation,
    useGetUserTaskStatusQuery
} = userApiSlice;