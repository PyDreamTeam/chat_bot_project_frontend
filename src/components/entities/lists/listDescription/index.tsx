import React, { FC } from "react";
import Text from "@/src/components/shared/text/Text";
import styles from "./listAdvantages.module.css";

interface IListSolutionDescription {
    short_description?: string;
}

export const ListDescription: FC<IListSolutionDescription> = ({ short_description }) => {
    return (
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <Text type={"reg18"} color={"grey"}>
                    {short_description}
                </Text>
            </li>
        </ul>
    );
};
