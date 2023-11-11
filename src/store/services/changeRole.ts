import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { boolean } from "yup";

export const changeRole = createApi({
    reducerPath: "changeRole",
    baseQuery: fetchBaseQuery({ baseUrl: "https://python.twnsnd.online" }),
    endpoints: (builder) => ({
        ChangeRole: builder.mutation<void, { requestValues: Record<string, unknown>; token: string; id: number }>({
            query: ({ requestValues, token, id }) => ({
                url: `/api/auth/users/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token}`,
                },
                body: requestValues,
            }),
        }),
        ChangeStatus: builder.mutation<void, { requestValues: Record<string, unknown>; token: string; id: number }>({/***{ is_active: boolean } */
            query: ({ requestValues, token, id }) => ({
                url: `/api/auth/users/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token}`,
                },
                body: requestValues,
            }),
        }),
        GetUsers: builder.query({
            query: (token) => ({
                url: "/api/users/list/",
                method: "GET",
                headers: {
                    Authorization: `JWT ${token}`,
                },
            }),
        }),
    }),
});

export const {
    useChangeStatusMutation,
    useChangeRoleMutation,
    useGetUsersQuery
} = changeRole;
