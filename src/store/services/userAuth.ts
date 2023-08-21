import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuth = createApi({
    reducerPath: "userAuth",
    baseQuery: fetchBaseQuery({ baseUrl: "https://python.twnsnd.online" }),
    endpoints: (builder) => ({
        dataUser: builder.query({
            query: (token: { access: string; refresh: string }) => ({
                url: "/api/auth/users/me/",
                method: "GET",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
            }),
        }),
        changeDataUser: builder.mutation<void, { requestValues: Record<string, unknown>; token: string }>({
            query: ({ requestValues, token }) => ({
                url: "/api/auth/users/me/",
                method: "PUT",
                headers: {
                    Authorization: `JWT ${token}`,
                },
                body: requestValues,
            }),
        }),
        createUser: builder.mutation({
            query: (arg) => ({
                url: "/api/auth/users/",
                method: "POST",
                body: arg,
            }),
        }),
        loginUser: builder.mutation({
            query: (arg) => ({
                url: "/api/auth/jwt/create/",
                method: "POST",
                body: arg,
            }),
        }),
        logoutUser: builder.mutation({
            query: (jwt: { access: string; refresh: string }) => ({
                url: "/api/auth/logout/",
                method: "POST",
                body: { refresh: jwt.refresh },
                headers: {
                    Authorization: `JWT ${jwt.access}`,
                },
            }),
        }),
        recoveryPassword: builder.mutation({
            query: (arg: { email: string }) => ({
                url: "/api/auth/users/reset_password/",
                method: "POST",
                body: arg,
            }),
        }),
        changePassword: builder.mutation({
            query: (arg) => ({
                url: "/api/auth/users/reset_password_confirm/",
                method: "POST",
                body: arg,
            }),
        }),
        verifyUser: builder.mutation({
            query: (token) => ({
                url: "/api/auth/jwt/verify/",
                method: "POST",
                body: { token: token },
            }),
        }),
        createOrder: builder.mutation({
            query: ({ requestValues, token }) => ({
                url: "/api/ordercreate/",
                method: "POST",
                headers: {
                    Authorization: `JWT ${token?.access}`,
                },
                body: requestValues,
            }),
        }),
        createOrderUnregistered: builder.mutation({
            query: (requestValues) => ({
                url: "/api/ordercreate/",
                method: "POST",
                body: requestValues,
            }),
        }),
    }),
});

export const {
    useCreateUserMutation,
    useLoginUserMutation,
    useLogoutUserMutation,
    useDataUserQuery,
    useChangeDataUserMutation,
    useRecoveryPasswordMutation,
    useChangePasswordMutation,
    useVerifyUserMutation,
    useCreateOrderMutation,
    useCreateOrderUnregisteredMutation,
} = userAuth;
