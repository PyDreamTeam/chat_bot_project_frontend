import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { boolean } from "yup";

export const changeRole = createApi({
    reducerPath: "changeRole",
    baseQuery: fetchBaseQuery({ baseUrl: "https://python.twnsnd.online" }),
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
