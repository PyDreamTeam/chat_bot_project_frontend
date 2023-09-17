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

const Solution = () => {
    const router = useRouter();
    const { ids } = router.query;

    const { data } = useGetSolutionQuery(Number(ids));

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
                <BlockComplexFunnel />
                <BlockShotDescription
                    id={data?.id}
                    business_model={data?.business_model}
                    business_area={data?.business_area}
                    business_niche={data?.business_niche}
                    solution_type={data?.solution_type}
                    objective={data?.objective}
                    title={data?.title}
                    full_description={data?.full_description}
                    short_description={data?.short_description}
                    price={data?.price}
                />
                <BlockGreatSolutions />
                <BlockFunnelBenefits />
                <BlockHowItWorks />
                <BlockTasksBySteps />
            </div>
            <Footer />
        </div>
    );
};

export default Solution;