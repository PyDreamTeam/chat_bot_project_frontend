import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuth = createApi({
    reducerPath: "userAuth",
    baseQuery: fetchBaseQuery({ baseUrl: "https://python.twnsnd.online" }),
    endpoints: (builder) => ({
        dataUser: builder.query({
            query: (token: { access: string; refresh: string }) => ({
                url: "/api/profile/",
                method: "GET",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
            }),
        }),
        changeDataUser: builder.mutation<void, { requestValues: Record<string, unknown>; token: string }>({
            query: ({ requestValues, token }) => ({
                url: "/api/profile/",
                method: "PATCH",
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
        sendAgain: builder.mutation({
            query: (arg) => ({
                url: "/api/auth/users/resend_activation/",
                method: "POST",
                body: arg,
            }),
        }),
        userActivation: builder.mutation({
            query: (arg) => ({
                url: "/api/auth/users/activation/",
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
        getOrdersList: builder.query({
            query: (token: { access: string; refresh: string }) => ({
                url: "/api/orderlist/",
                method: "GET",
                headers: {
                    Authorization: `JWT ${token?.access}`,
                },
            }),
        }),
        getOrder: builder.query({
            query: ({ token, id }) => ({
                url: `/api/orderlist/${id}/`,
                method: "GET",
                headers: {
                    Authorization: `JWT ${token?.access}`,
                },
            }),
        }),
        putOrder: builder.mutation({
            query: ({ requestValues, token, id }) => ({
                url: `/api/orderdetail/${id}/`,
                method: "PUT",
                headers: {
                    Authorization: `JWT ${token?.access}`,
                },
                body: requestValues,
            }),
        }),
        patchOrder: builder.mutation({
            query: ({ token, id }) => ({
                url: `/api/orderdetail/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token?.access}`,
                },
            }),
        }),
        deleteOrder: builder.mutation({
            query: ({ token, id }) => ({
                url: `/api/orderdetail/${id}/`,
                method: "DELETE",
                headers: {
                    Authorization: `JWT ${token?.access}`,
                },
            }),
        }),
        getTariffsList: builder.query({
            query: () => ({
                url: "/api/solution/tariffs/",
                method: "GET",
            }),
        }),
        getTariff: builder.query({
            query: ({ id }) => ({
                url: `/api/solution/tariffs/${id}/`,
                method: "GET",
            }),
        }),
        putTariff: builder.mutation({
            query: ({ tariff, token, id }) => ({
                url: `/api/solution/tariffs/${id}/`,
                method: "PUT",
                headers: {
                    Authorization: `JWT ${token?.access}`,
                },
                body: tariff,
            }),
        }),
    }),
});

export const {
    useCreateUserMutation,
    useLoginUserMutation,
    useSendAgainMutation,
    useUserActivationMutation,
    useLogoutUserMutation,
    useDataUserQuery,
    useChangeDataUserMutation,
    useRecoveryPasswordMutation,
    useChangePasswordMutation,
    useVerifyUserMutation,
    useCreateOrderMutation,
    useCreateOrderUnregisteredMutation,
    useGetOrdersListQuery,
    useGetOrderQuery,
    usePutOrderMutation,
    usePatchOrderMutation,
    useDeleteOrderMutation,
    useGetTariffsListQuery,
    useGetTariffQuery,
    usePutTariffMutation,
} = userAuth;
