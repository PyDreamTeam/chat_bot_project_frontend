import Header from "@/src/components/features/HomePage/Header/Header";
import css from "./solutions.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import {
    useGetFilteredFavoriteSolutionsQuery,
    useGetSolutionsFiltersQuery,
    useGetSolutionsQuery,
} from "@/src/store/services/solutions";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { GroupFilters } from "@/src/components/entities/platforms/leftBlock/GroupFilters/GroupFilters";
import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";
import { useAppSelector } from "@/src/hooks/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FieldOptions } from "@/src/components/entities/platforms/rightBlock/FieldOptions/FieldOptions";
import AlphabeticalSorting from "@/src/components/entities/platforms/rightBlock/AlphabeticalSorting/AlphabeticalSorting";
// import { PropsSolutionCard } from "@/src/components/entities/solutions/types";
import { PropsPlatformCard } from "@/src/components/entities/platforms/types";
import { ButtonOrder } from "@/src/components/shared/buttons/ButtonOrder";
import { ButtonScrollToUp } from "@/src/components/shared/buttons/ButtonScrollToUp";
import { InfiniteScroll } from "@/src/components/entities/platforms/rightBlock/InfiniteScroll/InfiniteScroll";
import InputSearch from "@/src/components/entities/platforms/rightBlock/InputSearch/InputSearch";
import { SolutionCard } from "@/src/components/entities/platforms/rightBlock/SolutionCard/SolutionCard";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import CardSkeleton from "@/src/components/shared/tabs/cardSkeleton/CardSkeleton";
import FilterSkeleton from "@/src/components/shared/tabs/filterSkeleton/FilterSkeleton";
import Cookies from "js-cookie";
import { useDataUserQuery } from "@/src/store/services/userAuth";

const SolutionsFilters = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data: userData, isSuccess } = useDataUserQuery(token);
    const router = useRouter();
    const handleClick = (ids: number) => {
        router.push(`/solutions/solution/${ids}`);
    };

    const filter = useAppSelector((state) => state.reducerFilters.filters);
    const ids = filter.filter((item) => item.id >= 1).map((item) => item.id);
    const minPrice = useAppSelector((state) => state.reducerFilters.min_price);
    const maxPrice = useAppSelector((state) => state.reducerFilters.max_price);
    const skeletons = [...new Array(6)];

    const [search, setSearch] = useState("");
    const [sortAbc, setSortAbc] = useState("");

    const { data: dataFilters, isLoading: isLoadingFilters } = useGetSolutionsFiltersQuery({});

    // const { combinedData, isLoading, readMore, refresh, isFetching } = useInfiniteScroll(useGetSolutionsQuery, {
    //     id_tags: ids,
    //     price_min: minPrice,
    //     price_max: maxPrice,
    //     title: search,
    //     sort_abc: sortAbc,
    // });

    const {
        data: filteredSolutions,
        isLoading: isLoadingFilteredSolutions,
        refetch: refetchFilteredSolutions,
    } = useGetSolutionsQuery({
        id_tags: ids,
        price_min: minPrice,
        price_max: maxPrice,
        title: search,
        sort_abc: sortAbc,
    });

    const {
        data: filteredFavSolutions,
        isLoading,
        refetch,
        isFetching,
    } = useGetFilteredFavoriteSolutionsQuery(
        {
            token,
            arg: {
                id_tags: ids,
                price_min: minPrice,
                price_max: maxPrice,
                title: search,
                sort_abc: sortAbc,
            },
        },
        { refetchOnMountOrArgChange: true }
    );

    useEffect(() => {
        if (filter.find((item) => item.tag === "A до Z (А до Я)")) {
            setSortAbc("a");
        } else if (filter.find((item) => item.tag === "Z до А (Я до А)")) {
            setSortAbc("z");
        } else setSortAbc("");
    }, [filter]);

    // const handleScroll = () => {
    //     readMore();
    // };

    return (
        <div>
            <Header type={"other"} />
            <div className={css.container}>
                <div className={css.blogInfo}>
                    <div>
                        <Text type="reg14" color="telegray">
                            <Link href={"/home"} className={css.link}>
                                Главная
                            </Link>
                            / <span className={css.link}>Подобрать решение</span>
                        </Text>
                    </div>
                    <div className={css.title}>
                        <Title type="h4" color="dark">
                            Решения
                        </Title>
                    </div>
                    <div className={css.main}>
                        <div className={css.leftBlock}>
                            {isLoadingFilters ? (
                                <div className={css.loaderFilter}>
                                    <FilterSkeleton count={4} type="listFilter" />
                                </div>
                            ) : (
                                <GroupFilters
                                    results={dataFilters?.results}
                                    onClick={() => refetchFilteredSolutions()}
                                />
                            )}
                        </div>
                        <div className={css.rightBlock}>
                            <div className={css.groupSearch}>
                                <Image
                                    src="/img/Icon_найти_платформу.svg"
                                    alt="search"
                                    width={24}
                                    height={24}
                                    className={css.search}
                                />
                                <InputSearch
                                    placeholder={"Найти решение"}
                                    value={search}
                                    onChange={(e) => {
                                        if (e.target.value.trim() !== "") {
                                            setSearch(e.target.value);
                                            refetchFilteredSolutions();
                                        }
                                        if (e.target.value === "") {
                                            setSearch(e.target.value);
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <FieldOptions />
                            </div>
                            <AlphabeticalSorting onClick={() => refetchFilteredSolutions()} />
                            {isLoading ? (
                                <div className={css.loaderSolutions}>
                                    {skeletons.map((_, index) => (
                                        <CardSkeleton type={"filter"} key={index} />
                                    ))}
                                </div>
                            ) : (
                                <ul className={css.listSolutions}>
                                    {filteredFavSolutions
                                        ? filteredFavSolutions?.results
                                              ?.filter((item: any) => item.status === "public")
                                              ?.map((item: PropsPlatformCard) => (
                                                  <li
                                                      key={item.id}
                                                      onClick={() => {
                                                          if (item.id) {
                                                              handleClick(item.id);
                                                          }
                                                      }}
                                                  >
                                                      <SolutionCard
                                                          id={item.id}
                                                          title={item.title}
                                                          short_description={item.short_description}
                                                          tags={item.tags}
                                                          image={item.image}
                                                          price={item.price}
                                                          type="filter"
                                                          is_favorite={item.is_favorite}
                                                          forceUpdate={refetch}
                                                      />
                                                  </li>
                                              ))
                                        : filteredSolutions?.results
                                              ?.filter((item: any) => item.status === "public")
                                              ?.map((item: PropsPlatformCard) => (
                                                  <li
                                                      key={item.id}
                                                      onClick={() => {
                                                          if (item.id) {
                                                              handleClick(item.id);
                                                          }
                                                      }}
                                                  >
                                                      <SolutionCard
                                                          id={item.id}
                                                          title={item.title}
                                                          short_description={item.short_description}
                                                          tags={item.tags}
                                                          image={item.image}
                                                          price={item.price}
                                                          type="filter"
                                                          is_favorite={item.is_favorite}
                                                      />
                                                  </li>
                                              ))}
                                    <div className={css.loaderSolutions}>
                                        <Loader isLoading={isFetching} />
                                    </div>
                                    {/* {filteredSolutions.length > 0 && <InfiniteScroll onLoadMore={handleScroll} />} */}
                                </ul>
                            )}
                        </div>
                    </div>
                    <ButtonOrder />
                    <ButtonScrollToUp />
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default SolutionsFilters;
