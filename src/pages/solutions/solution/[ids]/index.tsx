import Header from "@/src/components/features/HomePage/Header/Header";
import {
    useGetFavoriteSolutionQuery,
    useGetSolutionQuery,
    useGetSolutionsFiltersQuery,
} from "@/src/store/services/solutions";
import { useRouter } from "next/router";
import { skipToken } from "@reduxjs/toolkit/query";
import styles from "@/src/pages/solutions/solution/[ids]/solution.module.css";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import BlockSolutionCard from "@/src/components/features/SolutionDescriptionPage/BlockSolutionCard/BlockSolutionCard";
import BlockShortDescription from "@/src/components/features/SolutionDescriptionPage/BlockShortDescription/BlockShortDescription";
import BlockBenefits from "@/src/components/features/SolutionDescriptionPage/BlockBenefits/BlockBenefits";
import BlockHowItWorks from "@/src/components/features/SolutionDescriptionPage/BlockHowItWorks/BlockHowItWorks";
import BlockTasksBySteps from "@/src/components/features/SolutionDescriptionPage/BlockTasksBySteps/BlockTasksBySteps";
import { ButtonOrder } from "@/src/components/shared/buttons/ButtonOrder";
import { ButtonScrollToUp } from "@/src/components/shared/buttons/ButtonScrollToUp";
import { useGetPlatformQuery } from "@/src/store/services/platforms";
import Cookies from "js-cookie";

const Solution = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");

    const router = useRouter();
    const { ids } = router.query;
    const { data: favData } = useGetFavoriteSolutionQuery({ token, id: ids });
    const { data, isSuccess } = useGetSolutionQuery(Number(ids));
    const platformId = Number(data?.links_to_platform ? data?.links_to_platform[0] : null);
    const { data: platform } = useGetPlatformQuery(isSuccess ? platformId : skipToken);

    const { data: dataFilters } = useGetSolutionsFiltersQuery({});

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
                <BlockSolutionCard
                    id={data?.id}
                    title={data?.title}
                    image={data?.image}
                    advantages={data?.advantages}
                    links_to_platform={data?.links_to_platform}
                    is_favorite={favData?.is_favorite}
                    platform={platform?.image}
                />
                <BlockShortDescription
                    id={data?.id}
                    price={data?.price}
                    full_description={data?.full_description}
                    results={dataFilters?.results}
                    dignities={data?.dignities}
                />
                <BlockHowItWorks link={data?.link} />
                <BlockBenefits
                    full_description={data?.full_description}
                    platform={platform?.title}
                    cards={data?.cards}
                />
                <BlockTasksBySteps
                    steps_title={data?.steps_title}
                    steps_description={data?.steps_description}
                    steps={data?.steps}
                />
                <ButtonOrder dataComment={`Выбранное решение: ${data?.title}`} />
                <ButtonScrollToUp />
            </div>
            <Footer />
        </div>
    );
};

export default Solution;
