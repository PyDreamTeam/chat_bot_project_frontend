import { useState } from "react";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import css from "./platforms-filters.module.css";
import InputSearch from "@/src/components/entities/platforms/rightBlock/InputSearch/InputSearch";
import Image from "next/image";
import { useRouter } from "next/router";
import {
    useGetListPlatformsQuery,
    useGetPlatformQuery,
    useGetPlatformsFiltersQuery,
    useGetPlatformsQuery,
    useSearchPlatformsFiltersQuery,
} from "@/src/store/services/platforms";
import { PlatformsList } from "@/src/components/entities/platforms/addPlatform/allPlatformsAdmins/PlatformsList/PlatformsList";
import { Platforms } from "@/src/components/entities/platforms/addPlatform/allPlatformsAdmins/Platforms/Platforms";
import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";
import { InfiniteScroll } from "@/src/components/entities/platforms/rightBlock/InfiniteScroll/InfiniteScroll";
import { Platform } from "@/src/components/entities/platforms/addPlatform/allPlatformsAdmins/Platform/Platform";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { Button } from "@/src/components/shared/buttons/Button";
import { ButtonSmallPrimary } from "@/src/components/shared/buttons/ButtonSmallPrimary";
import { ButtonSmallSecondary } from "@/src/components/shared/buttons/ButtonSmallSecondary";
import FiltersList from "@/src/components/entities/platformsFilters/FiltersList/FiltersList";
import SearchFiltersList from "@/src/components/entities/platformsFilters/SearchFiltersList/SearchFiltersList";

const sortFiltersArr = [
    { title: "Опубликованные", value: "public" },
    { title: "Созданные", value: "save" },
    { title: "Архив", value: "archive" },
];

const PlatformsFilters = () => {
    const [searchFilter, setSearchFilter] = useState<string>("");

    // const { combinedData, isLoading, readMore, refresh, isFetching } = useInfiniteScroll(
    //     useSearchPlatformsFiltersQuery,
    //     {
    //         title: searchFilter,
    //     }
    // );

    const {
        data: searchData,
        isLoading: searchIsLoading,
        isFetching: searchIsFetching,
    } = useSearchPlatformsFiltersQuery({ title: searchFilter });
    console.log(searchData?.search_results);

    const { data: tagsData, isLoading: tagsIsLoading, isFetching: tagsIsFetching } = useGetPlatformsFiltersQuery({});
    // console.log(tagsData?.results);

    // const handleScroll = () => {
    //     readMore();
    // };

    const [sort, setSort] = useState<string>("save");
    const handleChangeSortFilters = (title: string) => {
        if (title === "Опубликованные") {
            // refresh();
            setSort("public");
        }
        if (title === "Созданные") {
            // refresh();
            setSort("save");
        }
        if (title === "Архив") {
            // refresh();
            setSort("archive");
        }
    };

    const router = useRouter();
    const handleAddGroup = () => {
        console.log("add group filter");
        // TODO: add group filter function
    };
    const handleAddFilter = () => {
        router.push("/admin/platforms/platforms-filters/add-filter");
    };

    return (
        <WrapperAdminPage>
            <ContainerAdminFunction>
                <div className={css.links}>
                    <Link href={"/admin"}>
                        <Text type="reg16" color="telegray">
                            Главная
                        </Text>
                    </Link>
                    <Link href={"/admin/platforms"}>
                        <Text type="reg16" color="telegray">
                            /Платформы
                        </Text>
                    </Link>
                    <span className={css.link}>/Фильтры</span>
                </div>
                <div className={css.workFilters}>
                    <Text type="med20" color="dark">
                        Управление фильтрами платформ
                    </Text>
                    <div className={css.buttonsBlock}>
                        <ButtonSmallPrimary active={true} type={"button"} onClick={handleAddGroup}>
                            Добавить группу фильтров
                        </ButtonSmallPrimary>
                        <ButtonSmallSecondary active={true} type={"button"} onClick={handleAddFilter}>
                            Добавить фильтр
                        </ButtonSmallSecondary>
                    </div>
                </div>
                <div className={css.groupSearch}>
                    <Image
                        src="/img/Icon_найти_платформу.svg"
                        alt="search"
                        width={24}
                        height={24}
                        className={css.search}
                    />
                    <InputSearch
                        placeholder="Поиск"
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                    />
                </div>
                {tagsData?.results?.length > 0 ? (
                    <div className={css.filtersContainer}>
                        <ul className={css.sortList}>
                            {sortFiltersArr.map(({ title, value }) => (
                                <li
                                    key={title}
                                    onClick={() => handleChangeSortFilters(title)}
                                    className={sort === value ? `${css.sortPlatformActive}` : `${css.sortPlatform}`}
                                >
                                    <Text
                                        type="reg16"
                                        color="grey"
                                        className={sort === value ? `${css.sortTextActive}` : `${css.sortText}`}
                                    >
                                        {title}
                                    </Text>
                                </li>
                            ))}
                        </ul>
                        {tagsIsLoading ? (
                            <div className={css.loaderPlatforms}>
                                <Loader isLoading={tagsIsLoading} />
                            </div>
                        ) : (
                            <div>
                                {searchFilter ? (
                                    <div>
                                        <SearchFiltersList searchData={searchData.search_results} sort={sort} />
                                    </div>
                                ) : (
                                    <div>
                                        <FiltersList tagsData={tagsData.results} sort={sort} />
                                    </div>
                                )}
                            </div>
                        )}
                        <div className={css.loaderPlatforms}>
                            <Loader isLoading={searchIsFetching} />
                        </div>
                    </div>
                ) : (
                    <div>
                        {tagsIsLoading ? (
                            <div className={css.loaderPlatforms}>
                                <Loader isLoading={tagsIsLoading} />
                            </div>
                        ) : (
                            <div className={css.addPlatformImg}>
                                <Image src="/admin/platform_plus.svg" alt="icon" width={120} height={120} />
                                <Text type="med18btn" color="dark">
                                    Фильтров пока нет
                                </Text>
                                <Text type="reg18" color="telegray" className={css.text}>
                                    Создайте новую группу фильтров
                                </Text>
                            </div>
                        )}
                    </div>
                )}
                {/* {combinedData.length > 0 && <InfiniteScroll onLoadMore={handleScroll} />} */}
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default PlatformsFilters;
