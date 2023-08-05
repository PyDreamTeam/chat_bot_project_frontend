import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const platforms = createApi({
     reducerPath: "platforms",
     baseQuery: fetchBaseQuery({baseUrl: "http://python.twnsnd.online"}),
     endpoints: (builder) => ({
          getPlatformsFilters: builder.query({
               query: () => ({
                    url: "/api/platform/tags/",
                    method: "GET",
               })
          }),
          getPlatforms: builder.query({
               query: (arg: {id_tags: Array<number>, price_min: number, price_max: number, title: string}) => ({
                    url: "/api/platform/filtration/",
                    method: "POST",
                    body: arg
               })
          })
     })
});

export const {useGetPlatformsFiltersQuery, useGetPlatformsQuery} = platforms;