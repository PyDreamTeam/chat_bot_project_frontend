import { SolutionCard } from "@/src/components/entities/platforms/rightBlock/SolutionCard/SolutionCard";
import Header from "@/src/components/features/HomePage/Header/Header";
import { useGetSolutionQuery, useGetSolutionsFiltersQuery } from "@/src/store/services/solutions";
import { useGetPlatformsQuery } from "@/src/store/services/platforms";
import { useRouter } from "next/router";
import styles from "@/src/pages/solutions/solution/[ids]/soluiton.module.css";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import Title from "@/src/components/shared/text/Title";
import { GroupFilters } from "@/src/components/entities/filters/GropFilters/GroupFilters";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import Slider from "@/src/components/shared/slider/Slider";
import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";
import ListCardsPlatforms from "@/src/components/entities/lists/listCardsPlatforms/ListCardsPlatforms";

const Solution = () => {
    const router = useRouter();
    const { ids } = router.query;

    const { data } = useGetSolutionQuery(Number(ids));
    const { data: dataFilters } = useGetSolutionsFiltersQuery({});

    // const { data: combinedData, isLoading, isFetching } = useGetListPlatformsQuery({});
    const { combinedData, isLoading, readMore, refresh, isFetching } = useInfiniteScroll(useGetPlatformsQuery, {});

    return (
        <div>
            <Header type="other" />
            <div className={styles.container}>
                <div>
                    <Text type="reg16" color="telegray">
                        <Link href={"/home"} className={styles.link}>
                            Главная
                        </Link>
                        /
                        <Link href={"/solutions"} className={styles.link}>
                            Посмотреть все решения
                        </Link>
                        /<span className={styles.link}>{data?.title}</span>
                    </Text>
                </div>
                <div className={styles.platform}>
                    <SolutionCard
                        id={data?.id}
                        title={data?.title}
                        short_description={data?.short_description}
                        tags={data?.tags}
                        image={data?.image}
                        price={data?.price}
                    />
                </div>
                <div className={styles.sliderTitle}>
                    <Title type="h4" color="dark">
                        15 платформ
                    </Title>
                </div>
                <Slider type="pageSlider">
                    <ListCardsPlatforms results={combinedData} />
                </Slider>
                <div className={styles.settings}>
                    <Title type="h4" color="dark">
                        Характеристики
                    </Title>
                </div>
                <GroupFilters results={dataFilters?.results} />
            </div>
            <Footer />
        </div>
    );
};

export default Solution;
