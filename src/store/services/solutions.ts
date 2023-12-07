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
        getSolutions: builder.query({
            query: (arg: {
                id_tags?: Array<number>;
                price_min?: number;
                price_max?: number;
                title?: string;
                sort_abc?: string;
                page_number?: number;
                items_per_page?: number;
            }) => ({
                url: "/api/solution/filtration/",
                method: "POST",
                body: arg,
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
        getSolutionAdvantages: builder.query({
            query: () => ({
                url: "/api/solution/advantages/",
                method: "GET",
            }),
        }),
        getSolutionDignities: builder.query({
            query: () => ({
                url: "/api/solution/dignities/",
                method: "GET",
            }),
        }),
        getSolutionCards: builder.query({
            query: () => ({
                url: "/api/solution/cards/",
                method: "GET",
            }),
        }),
        getSolutionSteps: builder.query({
            query: () => ({
                url: "/api/solution/steps/",
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
            query: ({ token, id }) => ({
                url: `/api/solution/solutions/${id}/favorite/`,
                method: "GET",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
            }),
        }),
        deleteSloution: builder.mutation({
            query: ({ id, token }) => ({
                url: `/api/solution/solutions/${id}/`,
                method: "DELETE",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
            }),
        }),
        solutionArchive: builder.mutation({
            query: ({ id, token, data }) => ({
                url: `/api/solution/solutions/${id}/`,
                method: "PUT",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    title: data.title,
                    status: "archive",
                },
            }),
        }),
        getSolutionForArchive: builder.mutation<PropsSolutionCard, number>({
            query: (id) => ({
                url: `/api/solution/solutions/${id}/`,
                method: "GET",
            }),
        }),
        sendToCreated: builder.mutation({
            query: ({ id, token, data }) => ({
                url: `/api/solution/solutions/${id}/`,
                method: "PUT",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: { title: data.title, status: "save" },
            }),
        }),
        changeSolution: builder.mutation({
            query: ({ id, token, solution }) => ({
                url: `/api/solution/solutions/${id}/`,
                method: "PUT",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: solution,
            }),
        }),
        solutionPublic: builder.mutation({
            query: ({ id, token, solution }) => ({
                url: `/api/solution/solutions/${id}/`,
                method: "PUT",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    title: solution.title,
                    status: "public",
                },
            }),
        }),
    }),
});

export const {
    useGetListSolutionsQuery,
    useGetSolutionsQuery,
    useGetSolutionQuery,
    useGetSolutionsFiltersQuery,
    useGetFavoriteSolutionsQuery,
    useAddSolutionToFavoriteMutation,
    useGetSolutionAdvantagesQuery,
    useGetSolutionDignitiesQuery,
    useGetSolutionCardsQuery,
    useGetSolutionStepsQuery,
    useDeleteSloutionMutation,
    useSolutionArchiveMutation,
    useGetSolutionForArchiveMutation,
    useSendToCreatedMutation,
    useChangeSolutionMutation,
    useSolutionPublicMutation,
} = solutions;
