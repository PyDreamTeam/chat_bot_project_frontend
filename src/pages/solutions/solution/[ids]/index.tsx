import Header from "@/src/components/features/HomePage/Header/Header";
import { useGetSolutionQuery, useGetSolutionsFiltersQuery } from "@/src/store/services/solutions";
import { useRouter } from "next/router";
import styles from "@/src/pages/solutions/solution/[ids]/soluiton.module.css";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import BlockComplexFunnel from "@/src/components/features/SolutionDescriptionPade/blockComplexFunnel/BlockComplexFunnel";
import BlockShotDescription from "@/src/components/features/SolutionDescriptionPade/blockShotDescription/BlockShotDescription";
import BlockGreatSolutions from "@/src/components/features/SolutionDescriptionPade/blockGreatSolutions/BlockGreatSolutions";
import BlockFunnelBenefits from "@/src/components/features/SolutionDescriptionPade/blockBenefitsFunnel/BlockBenefitsFunnel";
import BlockHowItWorks from "@/src/components/features/SolutionDescriptionPade/blockHowItWorks/BlockHowItWorks";
import BlockTasksBySteps from "@/src/components/features/SolutionDescriptionPade/blockTasksBySteps/BlockTasksBySteps";
import { ButtonOrder } from "@/src/components/shared/buttons/ButtonOrder";
import { ButtonScrollToUp } from "@/src/components/shared/buttons/ButtonScrollToUp";

const Solution = () => {
    const router = useRouter();
    const { ids } = router.query;

    const { data } = useGetSolutionQuery(Number(ids));
    const { data: dataFilters } = useGetSolutionsFiltersQuery({});
    console.log(dataFilters);
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
                <BlockComplexFunnel short_description={data?.short_description} title={data?.title} />
                <BlockShotDescription
                    id={data?.id}
                    price={data?.price}
                    full_description={data?.full_description}
                    results={dataFilters?.results}
                />
                <BlockFunnelBenefits results={dataFilters?.results} cards_description={data?.cards_description} />
                <BlockHowItWorks />
                <BlockTasksBySteps steps_title={data?.steps_title} steps_description={data?.steps_description} />
                <ButtonOrder dataComment={`Выбранное решение: ${data?.title}`} />
                <ButtonScrollToUp />
            </div>
            <Footer />
        </div>
    );
};

export default Solution;
