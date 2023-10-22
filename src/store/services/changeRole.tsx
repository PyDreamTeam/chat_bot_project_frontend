import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const changeRole = createApi({
    reducerPath: "changeRole",
    baseQuery: fetchBaseQuery({ baseUrl: "https://python.twnsnd.online" }),
    endpoints: (builder) => ({
        ChangeRole: builder.mutation<void, { requestValues: Record<string, unknown>; token: string }>({
            query: ({ requestValues, token }) => ({
                url: "/api/auth/users/{id}",
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token}`,
                },
                body: requestValues,
            }),
        }),

    }),
});

export const {
    useChangeRoleMutation,

} = changeRole;
