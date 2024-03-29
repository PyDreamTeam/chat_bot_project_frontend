import { useEffect, useState } from "react";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import css from "./platforms.module.css";
import InputSearch from "@/src/components/entities/platforms/rightBlock/InputSearch/InputSearch";
import Image from "next/image";
import { useRouter } from "next/router";
import { useGetListPlatformsQuery, useGetPlatformQuery, useGetPlatformsQuery } from "@/src/store/services/platforms";
import { PlatformsList } from "@/src/components/entities/platforms/addPlatform/allPlatformsAdmins/PlatformsList/PlatformsList";
import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";
import { InfiniteScroll } from "@/src/components/entities/platforms/rightBlock/InfiniteScroll/InfiniteScroll";
import { Platform } from "@/src/components/entities/platforms/addPlatform/allPlatformsAdmins/Platform/Platform";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { useSearchParams } from "next/navigation";
import { ButtonSmallPrimary } from "@/src/components/shared/buttons/ButtonSmallPrimary";
import { plusSvgPrimary, plusSvgSecondary } from "@/src/components/entities/platformsFilters/img/SvgConfig";

const sortPlatforms = [
    { title: "Опубликованные", value: "public" },
    { title: "Созданные", value: "save" },
    { title: "Архив", value: "archive" },
];

const PlatformsAdmin = () => {
    const searchParams = useSearchParams();
    const [searchPlatform, setSearchPlatform] = useState<string>("");

    // const { combinedData, isLoading, refetch, readMore, refresh, isFetching } = useInfiniteScroll(
    //     useGetPlatformsQuery,
    //     { title: searchPlatform }
    // );

    const {
        data: searchData,
        isLoading: searchIsLoading,
        isFetching: searchIsFetching,
        refetch: refetchSearch,
    } = useGetPlatformsQuery({ title: searchPlatform }, { refetchOnMountOrArgChange: true });

    // const handleScroll = () => {
    //     readMore();
    // };
    const sortFromQuery = searchParams.get("sort") || "save";

    const [sort, setSort] = useState<string>(sortFromQuery);
    const handleChangeSortPlatform = (title: string) => {
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
            // refetch();

            setSort("archive");
        }
    };

    console.log(searchData?.results);

    const router = useRouter();
    const handleRouter = () => {
        router.push("/admin/platforms/add-platform");
    };

    useEffect(() => {
        refetchSearch();
    }, [sort]);

    return (
        <WrapperAdminPage>
            <ContainerAdminFunction>
                <div className={css.links}>
                    <Link href={"/admin"}>
                        <Text type="reg16" color="telegray">
                            Главная
                        </Text>
                    </Link>
                    <span className={css.link}>/Платформы</span>
                    <span className={css.link}>/Работа с платформами</span>
                </div>

                <div className={css.workPlatform}>
                    <Text type="med20" color="dark">
                        Работа с платформами
                    </Text>
                    <ButtonSmallPrimary active={true} type={"button"} onClick={handleRouter}>
                        {plusSvgSecondary}
                        Создать платформу
                    </ButtonSmallPrimary>
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
                        value={searchPlatform}
                        onChange={(e) => setSearchPlatform(e.target.value)}
                    />
                </div>
                {searchData?.results.length > 0 ? (
                    <div>
                        <ul className={css.sortListPlatform}>
                            {sortPlatforms.map(({ title, value }) => (
                                <li
                                    key={title}
                                    onClick={() => handleChangeSortPlatform(title)}
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
                        <PlatformsList />
                        {searchIsLoading ? (
                            <div className={css.loaderPlatforms}>
                                <Loader isLoading={searchIsLoading} />
                            </div>
                        ) : (
                            <ul>
                                {searchData?.results
                                    .filter((item: any) => item.status === sort)
                                    .map((item: any) => (
                                        <li key={item.id}>
                                            <Platform
                                                title={item.title}
                                                link={item.link}
                                                tags={item.tags}
                                                id={item.id}
                                                sort={sort}
                                                refetch={refetchSearch}
                                            />
                                        </li>
                                    ))}
                            </ul>
                        )}
                        <div className={css.loaderPlatforms}>
                            <Loader isLoading={searchIsFetching} />
                        </div>
                    </div>
                ) : (
                    <div>
                        {searchIsLoading ? (
                            <div className={css.loaderPlatforms}>
                                <Loader isLoading={searchIsLoading} />
                            </div>
                        ) : (
                            <div className={css.addPlatformImg} onClick={handleRouter}>
                                <Image src="/admin/platform_plus.svg" alt="icon" width={120} height={120} />
                                <Text type="med18btn" color="dark">
                                    Платформ пока нет
                                </Text>
                                <Text type="reg18" color="telegray" className={css.text}>
                                    Создайте новую платформу
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

export default PlatformsAdmin;
