import { useEffect, useState } from "react";
import Header from "@/src/components/features/HomePage/Header/Header";
import css from "./platforms.module.css";
import Link from "next/link";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import {
    useGetFilteredFavoritePlatformsQuery,
    useGetPlatformsFiltersQuery,
    useGetPlatformsQuery,
} from "@/src/store/services/platforms";
import { GroupFilters } from "@/src/components/entities/platforms/leftBlock/GroupFilters/GroupFilters";
import InputSearch from "@/src/components/entities/platforms/rightBlock/InputSearch/InputSearch";
import Image from "next/image";
import { FieldOptions } from "@/src/components/entities/platforms/rightBlock/FieldOptions/FieldOptions";
import AlphabeticalSorting from "@/src/components/entities/platforms/rightBlock/AlphabeticalSorting/AlphabeticalSorting";
import { PlatformCard } from "@/src/components/entities/platforms/rightBlock/PlatformCard/PlatformCard";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { deleteAllFilters, deleteFilters } from "@/src/store/reducers/platforms/slice";
import { PropsPlatformCard } from "@/src/components/entities/platforms/types";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { useRouter } from "next/router";
// import { InfiniteScroll } from "@/src/components/entities/platforms/rightBlock/InfiniteScroll/InfiniteScroll";
// import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";
import { ButtonOrder } from "@/src/components/shared/buttons/ButtonOrder";
import { ButtonScrollToUp } from "@/src/components/shared/buttons/ButtonScrollToUp";
import Cookies from "js-cookie";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import CardSkeleton from "@/src/components/shared/tabs/cardSkeleton/CardSkeleton";
import FilterSkeleton from "@/src/components/shared/tabs/filterSkeleton/FilterSkeleton";

const PlatformsFilters = () => {
    const router = useRouter();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data: userData, isSuccess } = useDataUserQuery(token);
    const skeletons = [...new Array(6)];

    const handleClick = (idp: number) => {
        router.push(`/platforms/platform/${idp}`);
    };

    const dispatch = useAppDispatch();
    const filter = useAppSelector((state) => state.reducerFilters.filters);
    const ids = filter.filter((item) => item.id >= 1).map((item) => item.id);
    const minPrice = useAppSelector((state) => state.reducerFilters.min_price);
    const maxPrice = useAppSelector((state) => state.reducerFilters.max_price);

    const [search, setSearch] = useState("");
    const [sortAbc, setSortAbc] = useState("");

    const { data: dataFilters, isLoading: isLoadingFilters } = useGetPlatformsFiltersQuery({});

    const {
        data: filteredPlatforms,
        isLoading: isLoadingFilteredPlatforms,
        refetch: refetchFilteredPlatforms,
    } = useGetPlatformsQuery({
        id_tags: ids,
        price_min: minPrice,
        price_max: maxPrice,
        title: search,
        sort_abc: sortAbc,
    });

    const {
        data: filteredFavPlatforms,
        isLoading,
        refetch,
        isFetching,
    } = useGetFilteredFavoritePlatformsQuery(
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

    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            dispatch(deleteAllFilters());
        };

        router.events.on("routeChangeStart", handleRouteChange);

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router]);

    // const handleScroll = () => {
    //     readMore();
    // };

    return (
        <div>
            <Header type={"other"} />
            <div className={css.container}>
                <div className={css.blockInfo}>
                    <div>
                        <Text type="reg14" color="telegray">
                            <Link href={"/home"} className={css.link}>
                                Главная
                            </Link>
                            / <span className={css.link}>Подобрать платформу</span>
                        </Text>
                    </div>
                    <div className={css.title}>
                        <Title type="h4" color="dark">
                            Платформы
                        </Title>
                    </div>
                    <div className={css.main}>
                        <div className={css.leftBlock}>
                            {isLoadingFilters ? (
                                <div className={css.loaderFilter}>
                                    <FilterSkeleton count={11} type="listFilter" />
                                </div>
                            ) : (
                                <GroupFilters
                                    results={dataFilters?.results.filter((item: any) => item.status === "public")}
                                    onClick={() => refetch}
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
                                    placeholder={"Найти платформу"}
                                    value={search}
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                        if (e.target.value.trim() === "") {
                                            refetch();
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <FieldOptions />
                            </div>
                            <AlphabeticalSorting onClick={() => refetch()} />
                            {isLoading ? (
                                <div className={css.loaderPlatforms}>
                                    {skeletons.map((_, index) => (
                                        <CardSkeleton type={"filter"} key={index} />
                                    ))}
                                </div>
                            ) : (
                                <ul className={css.listPlatforms}>
                                    {filteredFavPlatforms
                                        ? filteredFavPlatforms?.results
                                              .filter((item: any) => item.status === "public")
                                              .map((item: PropsPlatformCard) => (
                                                  <li
                                                      key={item.id}
                                                      onClick={() => {
                                                          if (item.id) {
                                                              handleClick(item.id);
                                                          }
                                                      }}
                                                  >
                                                      <PlatformCard
                                                          id={item.id}
                                                          title={item.title}
                                                          short_description={item.short_description}
                                                          tags={item.tags}
                                                          image={item.image}
                                                          type="filter"
                                                          is_favorite={item.is_favorite}
                                                          forceUpdate={refetch}
                                                      />
                                                  </li>
                                              ))
                                        : filteredPlatforms?.results
                                              .filter((item: any) => item.status === "public")
                                              .map((item: PropsPlatformCard) => (
                                                  <li
                                                      key={item.id}
                                                      onClick={() => {
                                                          if (item.id) {
                                                              handleClick(item.id);
                                                          }
                                                      }}
                                                  >
                                                      <PlatformCard
                                                          id={item.id}
                                                          title={item.title}
                                                          short_description={item.short_description}
                                                          tags={item.tags}
                                                          image={item.image}
                                                          type="filter"
                                                          is_favorite={item.is_favorite}
                                                      />
                                                  </li>
                                              ))}
                                    <div className={css.loaderPlatforms}>
                                        <Loader isLoading={isFetching} />
                                    </div>
                                    {/* {filteredFavPlatforms.length > 0 && <InfiniteScroll onLoadMore={handleScroll} />} */}
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

export default PlatformsFilters;
