import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
     id: string;
     name: string;
     email: string;
     password: string;
}

export const authApi = createApi({
     baseQuery: fetchBaseQuery({
          baseUrl: "http://localhost:5000/",
     }),
     endpoints: (builder) => ({
          createUser: builder.mutation<Array<User>, User>({
               query: (user) => ({
                    url: "/users",
                    method: "POST",
                    body: user,
               }),
          }),
          validateUser: builder.query<any, any>({
               query: () => ({
                    url: "/users",
                    method: "GET",
               }),
          }),
     }),
});

export const { useCreateUserMutation, useLazyValidateUserQuery } = authApi;
