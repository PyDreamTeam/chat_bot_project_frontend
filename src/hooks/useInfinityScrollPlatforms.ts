import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { PropsSolutionCard } from "../components/entities/platforms/types";

const calculateMaxPages = (total: number, size: number) => {
    return Math.ceil(total / size);
};

export const isValidNotEmptyArray = (array: any[]): boolean => {
    return !!array;
};

export interface IListQueryResponse {
    results: PropsSolutionCard[];
    total_count: number;
    curent_page_number: number;
    items_per_page: number;
}

const useInfiniteScrollSolutions = (
    useGetSolutionsQuery: UseQuery<any>,
    { items_per_page = 5, ...queryParameters }
) => {
    const [localPage, setLocalPage] = useState(1);
    const [combinedData, setCombinedData] = useState<PropsSolutionCard[]>([]);
    const queryResponse = useGetSolutionsQuery({
        page_number: localPage,
        items_per_page,
        ...queryParameters,
    });
    const {
        results: results = [],
        curent_page_number: curent_page_number = 1,
        total_count: total_count = 0,
        items_per_page: size = 5,
    } = (queryResponse?.data as IListQueryResponse) || {};

    useEffect(() => {
        if (isValidNotEmptyArray(results)) {
            if (localPage === 1) setCombinedData(results);
            else if (localPage === curent_page_number) {
                setCombinedData((previousData) => [...previousData, ...results]);
            }
        }
    }, [results]);

    const maxPages = useMemo<number>(() => {
        return calculateMaxPages(total_count, size);
    }, [total_count, size]);

    const refresh = useCallback(() => {
        setLocalPage(1);
    }, []);

    const readMore = () => {
        if (localPage < maxPages && localPage === curent_page_number) {
            setLocalPage((curent_page_number) => curent_page_number + 1);
        }
    };

    return {
        combinedData,
        localPage,
        readMore,
        refresh,
        isLoading: queryResponse?.isLoading,
        isFetching: queryResponse?.isFetching,
    };
};

export default useInfiniteScrollSolutions;
