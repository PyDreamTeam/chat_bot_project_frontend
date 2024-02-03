import Header from "@/src/components/features/HomePage/Header/Header";
import { useGetSolutionQuery, useGetSolutionsFiltersQuery } from "@/src/store/services/solutions";
import { useRouter } from "next/router";
import styles from "@/src/pages/solutions/solution/[ids]/solution.module.css";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import BlockSolutionCard from "@/src/components/features/SolutionDescriptionPage/BlockSolutionCard/BlockSolutionCard";
import BlockShotDescription from "@/src/components/features/SolutionDescriptionPage/BlockShortDescription/BlockShortDescription";
import BlockFunnelBenefits from "@/src/components/features/SolutionDescriptionPage/BlockBenefitsFunnel/BlockBenefitsFunnel";
import BlockHowItWorks from "@/src/components/features/SolutionDescriptionPage/BlockHowItWorks/BlockHowItWorks";
import BlockTasksBySteps from "@/src/components/features/SolutionDescriptionPage/BlockTasksBySteps/BlockTasksBySteps";
import { ButtonOrder } from "@/src/components/shared/buttons/ButtonOrder";
import { ButtonScrollToUp } from "@/src/components/shared/buttons/ButtonScrollToUp";

const Solution = () => {
    const router = useRouter();
    const { ids } = router.query;

    const { data } = useGetSolutionQuery(Number(ids));
    console.log(data);

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
                {/* TODO: advantages instead of short_description  */}
                <BlockSolutionCard
                    id={data?.id}
                    short_description={data?.short_description}
                    title={data?.title}
                    image={data?.image}
                    turnkey_platform={data?.turnkey_platform}
                    is_favorite={data?.is_favorite}
                />
                <BlockShotDescription
                    id={data?.id}
                    price={data?.price}
                    full_description={data?.full_description}
                    results={dataFilters?.results}
                    dignities={data?.dignities}
                />
                <BlockHowItWorks />
                <BlockFunnelBenefits
                    results={dataFilters?.results}
                    cards_description={data?.cards_description}
                    full_description={data?.full_description}
                    platform={data?.platform}
                />
                <BlockTasksBySteps steps_title={data?.steps_title} steps_description={data?.steps_description} />
                <ButtonOrder dataComment={`Выбранное решение: ${data?.title}`} />
                <ButtonScrollToUp />
            </div>
            <Footer />
        </div>
    );
};

export default Solution;
