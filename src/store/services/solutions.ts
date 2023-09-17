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
    }),
});

export const { useGetListSolutionsQuery, useGetSolutionQuery, useGetSolutionsFiltersQuery } = solutions;
