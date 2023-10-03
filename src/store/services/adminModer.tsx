import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const administrators = createApi({
    reducerPath: "administrators",
    baseQuery: fetchBaseQuery({ baseUrl: "https://python.twnsnd.online" }),
    endpoints: (builder) => ({
        createAdmin: builder.mutation({
            query: (arg) => ({
                url: "/api/auth/users/",
                method: "POST",
                body: arg,
            }),
        }),
        editAdmin: builder.mutation({
            query: (arg) => ({
                url: "",
                method: "POST",
                body: arg,
            }),
        }),
    }),
});

export const {
    useCreateAdminMutation,
    useEditAdminMutation
} = administrators;
