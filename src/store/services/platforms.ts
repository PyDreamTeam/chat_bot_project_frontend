import { PropsPlatformCard } from "@/src/components/entities/platforms/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";


export const platforms = createApi({
    reducerPath: "platforms",
    baseQuery: fetchBaseQuery({ baseUrl: "https://python.twnsnd.online" }),
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
        getPlatform: builder.query<PropsPlatformCard, number>({
            query: (id) => ({
                url: `/api/platform/platforms/${id}/`,
                method: "GET",
            }),
        }),
        addPlatform: builder.mutation({
            query: ({platform, token}) => ({
                url: "/api/platform/platforms/",
                method: "POST",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: platform
            })
        }),
        profile: builder.mutation({
            query: ({platform, token}) => ({
                url: "/api/profile/",
                method: "PUT",
                headers: {
                    Authorization: `JWT ${token.access}`,
                },
                body: platform
            })
        }),
        qwe: builder.query({
            query: (token) => ({
                url: "/api/profile/",
                method: "GET",
                headers: {
                    Authorization: `JWT ${token.access}`,
                }
            })
        })
    }),
});

export const { useGetPlatformsFiltersQuery, useGetPlatformsQuery, useGetPlatformQuery, useAddPlatformMutation, useProfileMutation, useQweQuery } = platforms;
