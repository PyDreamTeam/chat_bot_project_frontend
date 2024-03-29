import React, { FC } from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./BlockTasksBySteps.module.css";
import img from "/public/img/step-by-step.svg";
import Image from "next/image";
import { PropsSolutionCard } from "@/src/components/entities/solutions/types";
import ListStepAccordion from "@/src/components/entities/lists/accordionList/ListStepAccordion";

const BlockTasksBySteps: FC<PropsSolutionCard> = ({ steps_title, steps_description, steps }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blockText}>
                <Title type={"h3"} color={"dark"}>
                    {steps_title}
                </Title>
                <div className={styles.text}>
                    <Text type={"reg18"} color={"grey"}>
                        {steps_description}
                    </Text>
                </div>
                <div className={styles.blockScroll}>
                    <div className={styles.blockAccordion}>
                        <ListStepAccordion data={steps} />
                    </div>
                </div>
            </div>
            <Image src={img} alt={"Step"} />
        </div>
    );
};

export default BlockTasksBySteps;
