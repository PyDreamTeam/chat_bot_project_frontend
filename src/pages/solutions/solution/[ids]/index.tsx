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
                <BlockComplexFunnel id={data?.id} title={data?.title} advantages={data?.advantages} />
                <BlockShotDescription
                    id={data?.id}
                    business_model={data?.business_model}
                    business_area={data?.business_area}
                    business_niche={data?.business_niche}
                    solution_type={data?.solution_type}
                    objective={data?.objective}
                    price={data?.price}
                    subtitle={data?.subtitle}
                    dignity={data?.dignity}
                    full_description={data?.full_description}
                    short_description={data?.short_description}
                    messengers={data?.messengers}
                    platform={data?.platform}
                    integration_with_CRM={data?.integration_with_CRM}
                    integration_with_payment_systems={data?.integration_with_payment_systems}
                />
                <BlockGreatSolutions />
                <BlockFunnelBenefits />
                <BlockHowItWorks />
                <BlockTasksBySteps steps_title={data?.steps_title} steps_text={data?.steps_text} />
                <ButtonOrder dataComment={`Выбранное решение: ${data?.title}`} />
                <ButtonScrollToUp />
            </div>
            <Footer />
        </div>
    );
};

export default Solution;
