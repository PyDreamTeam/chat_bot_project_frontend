import { useState } from "react";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import css from "./solutions.module.css";
import InputSearch from "@/src/components/entities/platforms/rightBlock/InputSearch/InputSearch";
import Image from "next/image";
import { useRouter } from "next/router";
import { useGetSolutionsQuery, useGetListSolutionsQuery } from "@/src/store/services/solutions";
import { SolutionsList } from "@/src/components/entities/solutions/addSolution/allSolutionAdmins/SolutionsList/SolutionsList";
import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";
import { InfiniteScroll } from "@/src/components/entities/platforms/rightBlock/InfiniteScroll/InfiniteScroll";
import { Solution } from "@/src/components/entities/solutions/addSolution/allSolutionAdmins/Solution/Solution";
import { Loader } from "@/src/components/shared/Loader/Loader";

const sortSolutions = [
    { title: "Опубликованные", value: "public" },
    { title: "Созданные", value: "save" },
    { title: "Архив", value: "archive" },
];

const SolutionsAdmin = () => {
    const [searchSolution, setSearchSolution] = useState<string>("");
    const { combinedData, isLoading, readMore, refresh, isFetching } = useInfiniteScroll(useGetSolutionsQuery, {
        title: searchSolution,
    });
    // const { combinedData, isLoading, readMore, refresh, isFetching } = useInfiniteScroll(useGetListSolutionsQuery, {
    //     title: searchSolution,
    // });

    const handleScroll = () => {
        readMore();
    };

    const [sort, setSort] = useState<string>("save");
    const handleChangeSortSolution = (title: string) => {
        if (title === "Опубликованные") {
            refresh();
            setSort("public");
        }
        if (title === "Созданные") {
            refresh();
            setSort("save");
        }
        if (title === "Архив") {
            refresh();
            setSort("archive");
        }
    };
    const router = useRouter();
    console.log(combinedData);
    const handleRouter = () => {
        router.push("/admin/solutions/add-solution");
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
                    <span className={css.link}>/Решения</span>
                    <span className={css.link}>/Работа с решениями </span>
                </div>

                <div className={css.workSolution}>
                    <Text type="med20" color="dark">
                        Работа с решениями
                    </Text>
                    <button className={css.addSolutionBtn} onClick={handleRouter}>
                        <Text type="reg16" color="white">
                            + Создать решение
                        </Text>
                    </button>
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
                        value={searchSolution}
                        onChange={(e) => setSearchSolution(e.target.value)}
                    />
                </div>
                {combinedData.length > 0 ? (
                    <div>
                        <ul className={css.sortListSolution}>
                            {sortSolutions.map(({ title, value }) => (
                                <li
                                    key={title}
                                    onClick={() => handleChangeSortSolution(title)}
                                    className={sort === value ? `${css.sortSolutionActive}` : `${css.sortSolution}`}
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
                        <SolutionsList />
                        {isLoading ? (
                            <div className={css.loaderSolutions}>
                                <Loader isLoading={isLoading} />
                            </div>
                        ) : (
                            <ul>
                                {combinedData
                                    .filter((item) => item.status === sort)
                                    .map((item) => (
                                        <li key={item.id}>
                                            <Solution
                                                title={item.title}
                                                link={item.link}
                                                tags={item.tags}
                                                id={item.id}
                                                sort={sort}
                                            />
                                        </li>
                                    ))}
                            </ul>
                        )}
                        <div className={css.loaderSolutions}>
                            <Loader isLoading={isFetching} />
                        </div>
                    </div>
                ) : (
                    <div className={css.addSolutionImg} onClick={handleRouter}>
                        <Image src="/admin/platform_plus.svg" alt="icon" width={120} height={120} />
                        <Text type="med18btn" color="dark">
                            Решений пока нет
                        </Text>
                        <Text type="reg18" color="telegray" className={css.text}>
                            Создайте новое решение
                        </Text>
                    </div>
                )}
                {combinedData.length > 0 && <InfiniteScroll onLoadMore={handleScroll} />}
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default SolutionsAdmin;
