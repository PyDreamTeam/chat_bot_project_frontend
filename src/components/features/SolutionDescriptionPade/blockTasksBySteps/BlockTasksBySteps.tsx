import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";

import styles from "./BlockTasksBySteps.module.css";
import img from "/public/img/Step.svg";
import Image from "next/image";

import { CONFIG_BLOCK_STEPS } from "@/src/components/features/SolutionDescriptionPade/blockTasksBySteps/ConfigBlockSteps";
import ListStepAccordion from "@/src/components/entities/lists/accordionList/ListStepAccordion";

const BlockTasksBySteps = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blockText}>
                <Title type={"h3"} color={"dark"}>
                    Выполнение задач по шагам
                </Title>
                <Text type={"reg18"} color={"grey"}>
                    Благодаря пошаговой автоматизированной автоворонке клиенту удастся сократить свои затраты, а также
                    избавиться от части рутинных процессов в структуре управления продуктом
                </Text>
                <div className={styles.blockScroll}>
                    <div className={styles.blockAccordion}>
                        <ListStepAccordion data={CONFIG_BLOCK_STEPS} />
                    </div>
                    <div className={styles.scroll}></div>
                </div>
            </div>
            <Image src={img} alt={"Step"} />
        </div>
    );
};

export default BlockTasksBySteps;
