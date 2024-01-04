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
        getFavoriteSolution: builder.query({
            query: ({token, id}) => ({
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
            query: ({token, title }) => ({
                url: "/api/solution/groups/",
                method: "POST",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    title: title,
                    status: "save",
                    image: "image"
                }
            })
        }),
        editSolutionFilterGroup: builder.mutation({
            query: ({id, token, title }) => ({
                url: `/api/solution/groups/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    title: title
                }
            })
        }),
        publicSolutionFilterGroup: builder.mutation({
            query: ({id, token }) => ({
                url: `/api/solution/groups/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "public"
                }
            })
        }),
        saveSolutionFilterGroup: builder.mutation({
            query: ({id, token }) => ({
                url: `/api/solution/groups/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "save"
                }
            })
        }),
        archiveSolutionFilterGroup: builder.mutation({
            query: ({id, token }) => ({
                url: `/api/solution/groups/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "save"
                }
            })
        }),
        searchSolutionsFilters: builder.query({
            query: (arg: {
                title?: string;
            }) => ({
                url: "/api/solution/filters-search/",
                method: "POST",
                body: arg,
            }),
        }),
        publicSolutionFilter: builder.mutation({
            query: ({id, token }) => ({
                url: `/api/solution/filters/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "public"
                }
            })
        }),
        saveSolutionFilter: builder.mutation({
            query: ({id, token }) => ({
                url: `/api/solution/filters/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "save"
                }
            })
        }),
        archiveSolutionFilter: builder.mutation({
            query: ({id, token }) => ({
                url: `/api/solution/filters/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "archive"
                }
            })
        }),
    }),
});

export const {
    useGetListSolutionsQuery,
    useGetSolutionsQuery,
    useGetFilteredFavoriteSolutionsQuery,
    useGetSolutionQuery,
    useGetSolutionsFiltersQuery,
    useGetFavoriteSolutionsQuery,
    useGetFavoriteSolutionQuery,
    useAddSolutionToFavoriteMutation,
    useGetSolutionAdvantagesQuery,
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
    usePublicSolutionFilterMutation,
    useSaveSolutionFilterMutation,
    useArchiveSolutionFilterMutation,
} = solutions;
