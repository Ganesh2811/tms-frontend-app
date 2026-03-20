import { taskUrl } from "../../../utils/contants";
import { apiSlice } from "../apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createTask: builder.mutation({
            query: (data) => ({
                url: `${taskUrl}/create`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        duplicateTask: builder.mutation({
            query: (id) => ({
                url: `${taskUrl}/duplicate/${id}`,
                method: "POST",
                body: {},
                credentials: "include",
            }),
        }),

        updateTask: builder.mutation({
            query: (data) => ({
                url: `${taskUrl}/update/${data._id}`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),

        getAllTask: builder.query({
            query: ({ strQuery, isTrashed, search }) => ({
                url: `${taskUrl}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
                method: "GET",
                credentials: "include",
            }),
        }),

        getSingleTask: builder.query({
            query: (id) => ({
                url: `${taskUrl}/${id}`,
                method: "GET",
                credentials: "include",
            }),
        }),

        createSubTask: builder.mutation({
            query: ({ data, id }) => {
                console.log("ID 👉", id);

                return {
                    url: `${taskUrl}/create-subtask/${id}`,
                    method: "PUT",
                    body: data,
                    credentials: "include",
                };
            },
        }),

        postTaskActivity: builder.mutation({
            query: ({ data, id }) => ({
                url: `${taskUrl}/activity/${id}`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        trashTast: builder.mutation({
            query: ({ id }) => ({
                url: `${taskUrl}/${id}`,
                method: "PUT",
                credentials: "include",
            }),
        }),

        deleteRestoreTast: builder.mutation({
            query: ({ id, actionType }) => ({
                url: `${taskUrl}/delete-restore/${id}?actionType=${actionType}`,
                method: "DELETE",
                credentials: "include",
            }),
        }),

        getDasboardStats: builder.query({
            query: () => ({
                url: `${taskUrl}/dashboard`,
                method: "GET",
                credentials: "include",
            }),
        }),

        changeTaskStage: builder.mutation({
            query: (data) => ({
                url: `${taskUrl}/change-stage/${data?.id}`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),

        changeSubTaskStatus: builder.mutation({
            query: (data) => ({
                url: `${taskUrl}/change-status/${data?.id}/${data?.subId}`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),
    }),
});

export const {
    usePostTaskActivityMutation,
    useCreateTaskMutation,
    useGetAllTaskQuery,
    useCreateSubTaskMutation,
    useTrashTastMutation,
    useDeleteRestoreTastMutation,
    useDuplicateTaskMutation,
    useUpdateTaskMutation,
    useGetSingleTaskQuery,
    useGetDasboardStatsQuery,
    useChangeTaskStageMutation,
    useChangeSubTaskStatusMutation,
} = postApiSlice;