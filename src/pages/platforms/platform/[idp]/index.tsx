import { PlatformCard } from "@/src/components/entities/platforms/rightBlock/PlatformCard/PlatformCard";
import Header from "@/src/components/features/HomePage/Header/Header";
import {
    useGetFavoritePlatformQuery,
    useGetPlatformQuery,
    useGetPlatformsFiltersQuery,
    useGetPlatformsQuery,
} from "@/src/store/services/platforms";
import { useGetListSolutionsQuery } from "@/src/store/services/solutions";
import { useRouter } from "next/router";
import css from "./platform.module.css";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import Title from "@/src/components/shared/text/Title";
import { GroupFilters } from "@/src/components/entities/filters/GropFilters/GroupFilters";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import Slider from "@/src/components/shared/slider/Slider";
import ListCardsSolutions from "@/src/components/entities/lists/listCardsSolutions/ListCardsSolutions";
import useInfiniteScrollSolutions from "@/src/hooks/useInfinityScrollPlatforms";
import { ButtonOrder } from "@/src/components/shared/buttons/ButtonOrder";
import { ButtonScrollToUp } from "@/src/components/shared/buttons/ButtonScrollToUp";
import Cookies from "js-cookie";

const Platform = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");

    const router = useRouter();
    const { idp } = router.query;

    const { data } = useGetPlatformQuery(Number(idp));
    const { data: favData } = useGetFavoritePlatformQuery({ token, id: idp });
    const { data: dataFilters } = useGetPlatformsFiltersQuery({});

    const { combinedData } = useInfiniteScrollSolutions(useGetListSolutionsQuery, {});

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
                        is_favorite={favData?.is_favorite}
                    />
                </div>
                <div className={css.sliderTitle}>
                    <Title type="h4" color="dark">
                        15 реализованных решений
                    </Title>
                </div>
                <Slider cardType="464" type="pageSlider">
                    <ListCardsSolutions results={combinedData} />
                </Slider>
                <div className={css.settings}>
                    <Title type="h4" color="dark">
                        Характеристики
                    </Title>
                </div>
                <GroupFilters results={dataFilters?.results} />
                <ButtonOrder />
                <ButtonScrollToUp />
            </div>
            <Footer />
        </div>
    );
};

export default Platform;
