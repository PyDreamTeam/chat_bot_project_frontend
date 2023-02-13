import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from '../store'

export interface User {
    first_name: string
    last_name: string
}

export interface UserResponse {
    user: User
    token: string
}

export interface SignUpRequest {
    username: string
    password: string
    email: string
}

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation<UserResponse, SignUpRequest>({     // тип ответа - UserResponse, тип запроса - SignUpRequest
            query: ({username, password, email}) => ({
                url: 'user',
                method: 'POST',
                body: {password, email, first_name: username},
            }),
        }),
        protected: builder.mutation<{ message: string }, void>({
            query: () => 'protected',
        }),
    }),
})

export const {useSignUpMutation, useProtectedMutation} = api