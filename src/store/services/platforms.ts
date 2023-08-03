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
          })
     })
});

export const {useGetPlatformsFiltersQuery} = platforms;