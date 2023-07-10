import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userAuth = createApi({
     reducerPath: "userAuth",
     baseQuery: fetchBaseQuery({baseUrl: "http://python.twnsnd.online:31080"}),
     endpoints: (builder) => ({
          loginUser: builder.mutation({
               query: (arg) => ({
                    url: "/api/auth/jwt/create/",
                    method: "POST",
                    body: arg
               })
          })
     })
});

export const { useLoginUserMutation } = userAuth;