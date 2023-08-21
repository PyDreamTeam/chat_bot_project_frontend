import { useEffect, useState } from "react";
import Header from "@/src/components/features/HomePage/Header/Header";
import css from "./platforms.module.css";
import Link from "next/link";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import { useGetPlatformsFiltersQuery, useGetPlatformsQuery } from "@/src/store/services/platforms";
import { GroupFilters } from "@/src/components/entities/platforms/leftBlock/GroupFilters/GroupFilters";
import InputSearch from "@/src/components/entities/platforms/rightBlock/InputSearch/InputSearch";
import Image from "next/image";
import { FieldOptions } from "@/src/components/entities/platforms/rightBlock/FieldOptions/FieldOptions";
import AlphabeticalSorting from "@/src/components/entities/platforms/rightBlock/AlphabeticalSorting/AlphabeticalSorting";
import { PlatformCard } from "@/src/components/entities/platforms/rightBlock/PlatformCard/PlatformCard";
import { useAppSelector } from "@/src/hooks/types";
import { PropsPlatformCard } from "@/src/components/entities/platforms/types";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { useRouter } from "next/router";

const PlatformsFilters = () => {
    const router = useRouter();
    const handleClick = (idp: number) => {
        router.push(`/platforms/platform/${idp}`);
    };

    const filter = useAppSelector((state) => state.reducerFilters.filters);
    const ids = filter.filter((item) => item.id >= 1).map((item) => item.id);
    const minPrice = useAppSelector((state) => state.reducerFilters.min_price);
    const maxPrice = useAppSelector((state) => state.reducerFilters.max_price);

    const [search, setSearch] = useState("");
    const [sortAbc, setSortAbc] = useState("");
    const [pageNumber, setPageNumber] = useState(1);

    const { data: dataFilters, isLoading: isLoadingFilters } = useGetPlatformsFiltersQuery({});

    const { data: dataPlatforms, isLoading: isLoadingPlatforms } = useGetPlatformsQuery({
        id_tags: ids,
        price_min: minPrice,
        price_max: maxPrice,
        title: search,
        sort_abc: sortAbc,
        page_number: pageNumber,
        items_per_page: 40,
    });

    useEffect(() => {
        if (filter.find((item) => item.tag === "A до Z (А до Я)")) {
            setSortAbc("a");
        } else if (filter.find((item) => item.tag === "Z до А (Я до А)")) {
            setSortAbc("z");
        } else setSortAbc("");
    }, [filter]);

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
                                    <Loader isLoading={isLoadingFilters} />
                                </div>
                            ) : (
                                <GroupFilters results={dataFilters?.results} />
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
                                <InputSearch value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>
                            <div>
                                <FieldOptions />
                            </div>
                            <AlphabeticalSorting />
                            {isLoadingPlatforms ? (
                                <div className={css.loaderPlatforms}>
                                    <Loader isLoading={isLoadingPlatforms} />
                                </div>
                            ) : (
                                <ul className={css.listPlatforms}>
                                    {dataPlatforms?.results.map((item: PropsPlatformCard) => (
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
                                            />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlatformsFilters;
