import { PlatformCard } from "@/src/components/entities/platforms/rightBlock/PlatformCard/PlatformCard";
import Header from "@/src/components/features/HomePage/Header/Header";
import { useGetPlatformQuery, useGetPlatformsFiltersQuery } from "@/src/store/services/platforms";
import { useRouter } from "next/router";
import css from "./platform.module.css";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import Title from "@/src/components/shared/text/Title";
import { GroupFilters } from "@/src/components/entities/filters/GropFilters/GroupFilters";
import Footer from "@/src/components/features/HomePage/Footer/Footer";

const Platform = () => {
    const router = useRouter();
    const { idp } = router.query;

    const { data } = useGetPlatformQuery(Number(idp));
    const { data: dataFilters } = useGetPlatformsFiltersQuery({});

    console.log("data", dataFilters);

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
                    />
                </div>
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