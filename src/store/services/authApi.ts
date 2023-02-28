import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export interface User {
     first_name: string;
     last_name: string;
}

export interface UserResponse {
     user: User;
     token: string;
}

export interface SignUpRequest {
     username: string;
     password: string;
     email: string;
}

export interface SignInRequest {
     password: string;
     email: string;
}

export interface RecoveryPasswordRequest {
     email: string;
}

export const authApi = createApi({
     baseQuery: fetchBaseQuery({
          baseUrl: "http://localhost:5000/",
     }),
     endpoints: (builder) => ({
          getUsers: builder.query<any, string>({
               query: () => ({
                    url: "/users",
                    method: "POST",
               }),
          }),
     }),
});

export const { useLazyGetUsersQuery } = authApi;
export default authApi.reducer;
