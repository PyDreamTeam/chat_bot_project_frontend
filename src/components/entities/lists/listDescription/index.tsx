import React, { FC } from "react";
import Text from "@/src/components/shared/text/Text";
import styles from "./listAdvantages.module.css";

interface IListSolutionDescription {
    advantages?: string[];
}

export const ListDescription: FC<IListSolutionDescription> = ({ advantages }) => {
    return (
        <ul className={styles.list}>
            {advantages?.map((item, index) => (
                <div key={index}>
                    <li className={styles.listItem}>
                        <Text type={"reg18"} color={"grey"}>
                            {item}
                        </Text>
                    </li>
                </div>
            ))}
        </ul>
    );
};
