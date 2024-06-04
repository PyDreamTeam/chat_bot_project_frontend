import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const changeRole = createApi({
    reducerPath: "changeRole",
    // baseQuery: fetchBaseQuery({ baseUrl: "https://python.twnsnd.online" }),
    baseQuery: fetchBaseQuery({ baseUrl: "https://python.devlaba.online" }),
    endpoints: (builder) => ({
        ChangeUserInfo: builder.mutation<void, { requestValues: Record<string, unknown>; token: string; id: number }>({
            query: ({ requestValues, token, id }) => ({
                url: `/api/account/users/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token}`,
                },
                body: requestValues,
            }),
        }),
        GetUsers: builder.query({
            query: (token) => ({
                url: "/api/account/users/",
                method: "GET",
                headers: {
                    Authorization: `JWT ${token}`,
                },
            }),
        }),
    }),
});

export const {
    useChangeUserInfoMutation,
    useGetUsersQuery
} = changeRole;
