import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userAuth = createApi({
     reducerPath: "userAuth",
     baseQuery: fetchBaseQuery({baseUrl: "http://python.twnsnd.online:31080"}),
     endpoints: (builder) => ({
          dataUser: builder.mutation({
               query: (token: {access: string, refresh: string}) => ({
                    url: "/api/auth/users/me/",
                    method: "GET",
                    headers: {
                         Authorization: `JWT ${token.access}`,
                    }
               })
          }),
          createUser: builder.mutation({
               query: (arg) => ({
                    url: "/api/auth/users/",
                    method: "POST",
                    body: arg
               })
          }),
          loginUser: builder.mutation({
               query: (arg) => ({
                    url: "/api/auth/jwt/create/",
                    method: "POST",
                    body: arg
               })
          }),
          logoutUser: builder.mutation({
               query: (jwt: {access: string, refresh: string}) => ({
                    url: "/api/auth/logout/",
                    method: "POST",
                    body: {refresh: jwt.refresh},
                    headers: {
                         Authorization: `JWT ${jwt.access}`,
                    }
               })
          }),
          recoveryPassword: builder.mutation({
               query: (arg: {email: string}) => ({
                    url: "/api/auth/users/reset_password/",
                    method: "POST",
                    body: arg
               })
          }),
          changePassword: builder.mutation({
               query: (arg) => ({
                    url: "/api/auth/users/reset_password_confirm/",
                    method: "POST",
                    body: arg
               })
          }),
          verifyUser: builder.mutation({
               query: (token) => ({
                    url: "/api/auth/jwt/verify/",
                    method: "POST",
                    body: {token: token}
               })
          }),
     })
});

export const { useCreateUserMutation, useLoginUserMutation, useLogoutUserMutation, useVerifyUserMutation, useDataUserMutation, useRecoveryPasswordMutation, useChangePasswordMutation } = userAuth;