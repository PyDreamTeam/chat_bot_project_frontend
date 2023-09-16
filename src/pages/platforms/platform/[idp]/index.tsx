import { PlatformCard } from "@/src/components/entities/platforms/rightBlock/PlatformCard/PlatformCard";
import Header from "@/src/components/features/HomePage/Header/Header";
import { useGetPlatformQuery, useGetPlatformsFiltersQuery, useGetPlatformsQuery } from "@/src/store/services/platforms";
import { useGetSolutionsQuery } from "@/src/store/services/solutions";
import { useRouter } from "next/router";
import css from "./platform.module.css";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import Title from "@/src/components/shared/text/Title";
import { GroupFilters } from "@/src/components/entities/filters/GropFilters/GroupFilters";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import Slider from "@/src/components/shared/slider/Slider";
import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";
import ListCardsSolutions from "@/src/components/entities/lists/listCardsSolutions/ListCardsSolutions";
import useInfiniteScrollSolutions from "@/src/hooks/useInfinityScrollPlatforms";

const Platform = () => {
    const router = useRouter();
    const { idp } = router.query;

    const { data } = useGetPlatformQuery(Number(idp));
    const { data: dataFilters } = useGetPlatformsFiltersQuery({});

    const { combinedData } = useInfiniteScrollSolutions(useGetSolutionsQuery, {});

    return (
        <div>
            <Header type="other" />
            <div className={css.container}>
                <div>
                    <Text type="reg16" color="telegray">
                        <Link href={"/home"} className={css.link}>
                            Главная
                        </Link>
                        /
                        <Link href={"/platforms-filter"} className={css.link}>
                            Подобрать платформу
                        </Link>
                        /<span className={css.link}>{data?.title}</span>
                    </Text>
                </div>
                <div className={css.platform}>
                    <PlatformCard
                        id={data?.id}
                        title={data?.title}
                        short_description={data?.short_description}
                        tags={data?.tags}
                        image={data?.image}
                        type="platform"
                        price={data?.price}
                        link={data?.link}
                    />
                </div>
                <div className={css.sliderTitle}>
                    <Title type="h4" color="dark">
                        15 реализованных решений
                    </Title>
                </div>
                <Slider type="pageSlider">
                    <ListCardsSolutions results={combinedData} />
                </Slider>
                <div className={css.settings}>
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

export default Platform;
