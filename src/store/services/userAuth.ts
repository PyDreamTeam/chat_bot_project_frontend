import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userAuth = createApi({
     reducerPath: "userAuth",
     baseQuery: fetchBaseQuery({baseUrl: "http://python.twnsnd.online:31080"}),
     endpoints: (builder) => ({
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
          verifyUser: builder.mutation({
               query: (token) => ({
                    url: "/api/auth/jwt/verify/",
                    method: "POST",
                    body: {token: token}
               })
          })
     })
});

export const { useCreateUserMutation, useLoginUserMutation, useLogoutUserMutation, useVerifyUserMutation } = userAuth;