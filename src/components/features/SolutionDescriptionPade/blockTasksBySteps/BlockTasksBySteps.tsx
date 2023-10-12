import React, { FC } from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";

import styles from "./BlockTasksBySteps.module.css";
import img from "/public/img/Step.svg";
import Image from "next/image";
import { PropsSolutionCard } from "@/src/components/entities/platforms/types";

import { CONFIG_BLOCK_STEPS } from "@/src/components/features/SolutionDescriptionPade/blockTasksBySteps/ConfigBlockSteps";
import ListStepAccordion from "@/src/components/entities/lists/accordionList/ListStepAccordion";

const BlockTasksBySteps: FC<PropsSolutionCard> = ({ steps_title, steps_text }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blockText}>
                <Title type={"h3"} color={"dark"}>
                    {steps_title}
                </Title>
                <Text className={styles.text} type={"reg18"} color={"grey"}>
                    {steps_text}
                </Text>
                <div className={styles.blockScroll}>
                    <div className={styles.blockAccordion}>
                        <ListStepAccordion data={CONFIG_BLOCK_STEPS} />
                    </div>
                </div>
            </div>
            <Image src={img} alt={"Step"} />
        </div>
    );
};

export default BlockTasksBySteps;
