import { PropsPlatformCard } from "@/src/components/entities/platforms/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const boundary = "----WebKitFormBoundaryexample";

export const platforms = createApi({
    reducerPath: "platforms",
    // baseQuery: fetchBaseQuery({ baseUrl: "https://python.twnsnd.online" }),
    // python.devlaba.online
    baseQuery: fetchBaseQuery({ baseUrl: "https://python.devlaba.online" }),
    endpoints: (builder) => ({
        getPlatformsFilters: builder.query({
            query: () => ({
                url: "/api/platform/tags/",
                method: "GET",
            }),
        }),
        getPlatforms: builder.query({
            query: (arg: {
                id_tags?: Array<number>;
                price_min?: number;
                price_max?: number;
                title?: string;
                sort_abc?: string;
                page_number?: number;
                items_per_page?: number;
            }) => ({
                url: "/api/platform/filtration/",
                method: "POST",
                body: arg,
            }),
        }),
        getFilteredFavoritePlatforms: builder.query({
            query: ({ arg, token }) => ({
                url: "/api/platform/filtration/",
                method: "POST",
                body: arg,
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
            }),
        }),
        getPlatform: builder.query<PropsPlatformCard, number>({
            query: (id) => ({
                url: `/api/platform/platforms/${id}/`,
                method: "GET",
            }),
        }),
        getFavoritePlatform: builder.query({
            query: ({token, id}) => ({
                url: `/api/platform/platforms/${id}/`,
                method: "GET",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
            }),
        }),
        getPlatformForArchive: builder.mutation<PropsPlatformCard, number>({
            query: (id) => ({
                url: `/api/platform/platforms/${id}/`,
                method: "GET",
            }),
        }),
        getListPlatforms: builder.query({
            query: () => ({
                url: "/api/platform/platforms/",
                method: "GET",
            }),
        }),
        getFavoritePlatforms: builder.query({
            query: (token) => ({
                url: "/api/platform/platforms/",
                method: "GET",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
            }),
        }),
        addPlatform: builder.mutation({
            query: ({ platform, token }) => ({
                url: "/api/platform/platforms/",
                method: "POST",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: platform,
            }),
        }),
        addPlatformToFavorite: builder.mutation({
            query: ({ token, id}) => ({
                url: `/api/platform/platforms/${id}/favorite/`,
                method: "GET",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
            })
        }),
        
        changePlatform: builder.mutation({
            query: ({ id, token, platform }) => ({
                url: `/api/platform/platforms/${id}/`,
                method: "PUT",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: platform
            })
        }),
        platformPublic: builder.mutation({
            query: ({ id, token, platform }) => ({
                url: `/api/platform/platforms/${id}/`,
                method: "PUT",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    title: platform.title,
                    status: "public"
                }
            })
        }),
        platformArchive: builder.mutation({
            query: ({ id, token, data }) => ({
                url: `/api/platform/platforms/${id}/`,
                method: "PUT",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    title: data.title,
                    status: "archive"
                }
            })
        }),
        sendToCreated: builder.mutation({
            query: ({id, token, data }) => ({
                url: `/api/platform/platforms/${id}/`,
                method: "PUT",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {title: data.title,
                    status: "save"
                }
            })
        }),
        deletePlatform: builder.mutation({
            query: ({ id, token }) => ({
                url: `/api/platform/platforms/${id}/`,
                method: "DELETE",
                headers: {
                    Authorization: `JWT ${token.access}`,
                }
            })
        }),
        searchPlatformsFilters: builder.query({
            query: (arg: {
                title?: string;
            }) => ({
                url: "/api/platform/filters-search/",
                method: "POST",
                body: arg,
            }),
        }),
        addPlatformFilter: builder.mutation({
            query: ({ filter, token }) => ({
                url: "/api/platform/filters/",
                method: "POST",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: filter,
            }),
        }),
        getPlatformFilter: builder.query({
            query: ({ id }) => ({
                url: `/api/platform/filters/${id}/`,
                method: "GET",
            }),
        }),
        deletePlatformFilter: builder.mutation({
            query: ({ id, token }) => ({
                url: `/api/platform/filters/${id}/`,
                method: "DELETE",
                headers: {
                    Authorization: `JWT ${token.access}`,
                }
            })
        }),
        putPlatformFilter: builder.mutation({
            query: ({ filter, token, id }) => ({
                url: `/api/platform/filters/${id}/`,
                method: "PUT",
                headers: {
                    Authorization: `JWT ${token?.access}`,
                },
                body: filter,
            }),
        }),
        createPlatformFilterGroup: builder.mutation({
            query: ({token, title }) => ({
                url: "/api/platform/groups/",
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
        editPlatformFilterGroup: builder.mutation({
            query: ({id, token, title }) => ({
                url: `/api/platform/groups/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    title: title
                }
            })
        }),
        getPlatformFilterGroups: builder.query({
            query: () => ({
                url: "/api/platform/groups/",
                method: "GET",
            }),
        }),
        platformFilterPublic: builder.mutation({
            query: ({id, token }) => ({
                url: `/api/platform/filters/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "public"
                }
            })
        }),
        platformFilterGroupPublic: builder.mutation({
            query: ({id, token }) => ({
                url: `/api/platform/groups/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "public"
                }
            })
        }),
        platformFilterSave: builder.mutation({
            query: ({id, token }) => ({
                url: `/api/platform/filters/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "save"
                }
            })
        }),
        platformFilterGroupSave: builder.mutation({
            query: ({id, token }) => ({
                url: `/api/platform/groups/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "save"
                }
            })
        }),
        platformFilterArchive: builder.mutation({
            query: ({id, title, group, token }) => ({
                url: `/api/platform/filters/${id}/`,
                method: "PATCH",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: {
                    status: "archive",
                    group: group,
                    title: title
                }
            })
        }),
        platformFilterGroupArchive: builder.mutation({
            query: ({id, token }) => ({
                url: `/api/platform/groups/${id}/`,
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
    useGetPlatformsFiltersQuery,
    useGetPlatformsQuery,
    useGetFilteredFavoritePlatformsQuery,
    useGetPlatformQuery,
    useGetPlatformForArchiveMutation,
    useAddPlatformMutation,
    useGetListPlatformsQuery,
    useDeletePlatformMutation,
    useChangePlatformMutation,
    usePlatformArchiveMutation,
    usePlatformPublicMutation,
    useAddPlatformToFavoriteMutation,
    useGetFavoritePlatformsQuery,
    useGetFavoritePlatformQuery,
    useSendToCreatedMutation,
    useAddPlatformFilterMutation,
    useGetPlatformFilterQuery,
    useDeletePlatformFilterMutation,
    usePutPlatformFilterMutation,
    useSearchPlatformsFiltersQuery,
    useCreatePlatformFilterGroupMutation,
    useGetPlatformFilterGroupsQuery,
    useEditPlatformFilterGroupMutation,
    usePlatformFilterPublicMutation,
    usePlatformFilterGroupPublicMutation,
    usePlatformFilterSaveMutation,
    usePlatformFilterGroupSaveMutation,
    usePlatformFilterArchiveMutation,
    usePlatformFilterGroupArchiveMutation
} = platforms;
