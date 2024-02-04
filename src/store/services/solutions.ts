import { PropsSolutionCard } from "@/src/components/entities/solutions/types";
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
        getSolutionsFiltersList: builder.query({
            query: () => ({
                url: "/api/solution/filters/",
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
        getFilteredFavoriteSolutions: builder.query({
            query: ({ arg, token }) => ({
                url: "/api/solution/filtration/",
                method: "POST",
                body: arg,
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
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
        getFavoriteSolution: builder.query({
            query: ({  token, id  }) => ({
                url: `/api/solution/solutions/${id}/`,
                method: "GET",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
            }),
        }),
        getSolutionFilterGroups: builder.query({
            query: () => ({
                url: "/api/solution/groups/",
                method: "GET",
            }),
        }),
        createSolutionFilterGroup: builder.mutation({
            query: ({  token, title }) => ({
                url: "/api/solution/groups/",
                method: "POST",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    title: title,
                    status: "save",
                    image: "image",
                },
            }),
        }),
        deleteSolution: builder.mutation({
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
        addSolution: builder.mutation({
            query: ({ solution, token }) => ({
                url: "/api/solution/solutions/",
                method: "POST",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: solution,
            }),
        }),
        editSolutionFilterGroup: builder.mutation({
            query: ({  id, token, title }) => ({
                url: `/api/solution/groups/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    title: title,
                },
            }),
        }),
        publicSolutionFilterGroup: builder.mutation({
            query: ({ id, token }) => ({
                url: `/api/solution/groups/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "public",
                },
            }),
        }),
        saveSolutionFilterGroup: builder.mutation({
            query: ({ id, token }) => ({
                url: `/api/solution/groups/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "save",
                },
            }),
        }),
        archiveSolutionFilterGroup: builder.mutation({
            query: ({ id, token }) => ({
                url: `/api/solution/groups/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "archive",
                },
            }),
        }),
        searchSolutionsFilters: builder.query({
            query: (arg: { title?: string }) => ({
                url: "/api/solution/filters-search/",
                method: "POST",
                body: arg,
            }),
        }),
        createSolutionFilter: builder.mutation({
            query: ({ filter, token }) => ({
                url: "/api/solution/filters/",
                method: "POST",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: filter,
            }),
        }),
        getSolutionFilter: builder.query({
            query: ({ id }) => ({
                url: `/api/solution/filters/${id}/`,
                method: "GET",
            }),
        }),
        putSolutionFilter: builder.mutation({
            query: ({ filter, token, id }) => ({
                url: `/api/solution/filters/${id}/`,
                method: "PUT",
                headers: {
                    Authorization: `JWT ${token?.access}`,
                },
                body: filter,
            }),
        }),
        publicSolutionFilter: builder.mutation({
            query: ({ id, token }) => ({
                url: `/api/solution/filters/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "public",
                },
            }),
        }),
        saveSolutionFilter: builder.mutation({
            query: ({ id, token }) => ({
                url: `/api/solution/filters/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "save",
                },
            }),
        }),
        archiveSolutionFilter: builder.mutation({
            query: ({ id, token }) => ({
                url: `/api/solution/filters/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "archive",
                },
            }),
        }),
        deleteSolutionFilter: builder.mutation({
            query: ({ id, token }) => ({
                url: `/api/solution/filters/${id}/`,
                method: "DELETE",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
            }),
        }),
    }),
});

export const {
    useGetListSolutionsQuery,
    useGetSolutionsQuery,
    useGetFilteredFavoriteSolutionsQuery,
    useGetSolutionQuery,
    useGetSolutionsFiltersQuery,
    useGetSolutionsFiltersListQuery,
    useGetFavoriteSolutionsQuery,
    useGetFavoriteSolutionQuery,
    useAddSolutionToFavoriteMutation,
    useGetSolutionDignitiesQuery,
    useGetSolutionCardsQuery,
    useGetSolutionStepsQuery,
    useGetSolutionFilterGroupsQuery,
    useCreateSolutionFilterGroupMutation,
    useEditSolutionFilterGroupMutation,
    usePublicSolutionFilterGroupMutation,
    useSaveSolutionFilterGroupMutation,
    useArchiveSolutionFilterGroupMutation,
    useSearchSolutionsFiltersQuery,
    useCreateSolutionFilterMutation,
    useGetSolutionFilterQuery,
    usePutSolutionFilterMutation,
    usePublicSolutionFilterMutation,
    useSaveSolutionFilterMutation,
    useArchiveSolutionFilterMutation,
    useDeleteSolutionFilterMutation,
    useChangeSolutionMutation,
    useAddSolutionMutation,
    useSolutionPublicMutation,
    useDeleteSolutionMutation,
    useSolutionArchiveMutation,
    useGetSolutionForArchiveMutation,
    useSendToCreatedMutation,
} = solutions;
