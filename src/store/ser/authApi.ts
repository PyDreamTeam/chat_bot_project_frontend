import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { validationSchemaSignUp } from "@/src/pagesData/sign-up";
import { validationSchemaSignIn } from "@/src/pagesData/sign-in";
import { validationSchemaUpdate } from "@/src/pagesData/update-password";
import { ICredentials } from "@/src/shared/types/credentials";
import { ResultType } from "@remix-run/router/utils";

export interface User {
     id: string;
     name: string;
     email: string;
     token: string;
     password: string;
}

interface IQuerySignUp {
     username: string;
     password: string;
     email: string;
     getEmailNotification?: boolean;
}

// const httpHeaders = {
//      "Accept": "*/*",
//      "Access-Control-Allow-Origin": "*",
//      "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
//      "Access-Control-Allow-Headers": "Content-Type",
//      "Vary" : "Accept",
//      "content-type" : "application/json",
//      "Authorization": "Token f78cfa9b32484db6dec56aa47531b95cbaf52cd2"
// };

export const authApi = createApi({
     reducerPath: "authApi",
     baseQuery: fetchBaseQuery({
          baseUrl: "http://python.twnsnd.online:31080",
     }),
     endpoints: (build) => ({
          createUser: build.mutation<ICredentials, typeof validationSchemaSignUp>({
               query: (arg) => ({
                    url: "/user/",
                    method: "POST",
                    body: { ...arg, get_email_notifications: false },
               }),
          }),
          userAuth: build.mutation<ICredentials, typeof validationSchemaSignIn>({
               query: (arg) => ({
                    url: "/auth/token/create/",
                    method: "POST",
                    body: arg,
               }),
          }),
          userLogOut: build.query<ResultType, string>({
               query: (token) => ({
                    url: "/auth/token/destroy/",
                    headers: {
                         Authorization: JSON.stringify(token),
                    },
                    method: "POST",
               }),
          }),
          setNewPassword: build.mutation<User, typeof validationSchemaUpdate>({
               query: (arg) => ({
                    url: "/change-password/",
                    method: "PATCH",
                    body: arg,
               }),
          }),
          // createUser: build.mutation<Array<User>, User>({
          //      query: (user) => ({
          //           url: "/users",
          //           method: "POST",
          //           body: user,
          //      })
          // }),
          // validateUser: build.query<any, any>({
          //      query: () => ({
          //           url: "/users",
          //           method: "GET",
          //      })
          // }),
     }),
});

export const { useCreateUserMutation, useUserAuthMutation, useUserLogOutQuery, useSetNewPasswordMutation } = authApi;
