import { PropsSolutionCard } from "@/src/components/entities/platforms/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const solutions = createApi({
    reducerPath: "solutions",
    baseQuery: fetchBaseQuery({ baseUrl: "https://python.twnsnd.online" }),
    endpoints: (builder) => ({
        getSolutionsFilters: builder.query({
            query: () => ({
                url: "/api/solution/tags/",
                method: "GET",
            }),
        }),
        getListSolutions: builder.query({
            query: () => ({
                url: "/api/solution/solutions/",
                method: "GET",
            }),
        }),
        getSolution: builder.query<PropsSolutionCard, number>({
            query: (id) => ({
                url: `/api/solution/solutions/${id}/`,
                method: "GET",
            }),
        }),
        getFavoriteSolutions: builder.query({
            query: (token) => ({
                url: "/api/solution/solutions/",
                method: "GET",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
            }),
        }),
        addSolutionToFavorite: builder.mutation({
            query: ({ token, id}) => ({
                url: `/api/solution/solutions/${id}/favorite/`,
                method: "GET",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
            })
        }),
    }),
});

export const { 
    useGetListSolutionsQuery, 
    useGetSolutionQuery, 
    useGetSolutionsFiltersQuery,
    useGetFavoriteSolutionsQuery,
    useAddSolutionToFavoriteMutation
} = solutions;
