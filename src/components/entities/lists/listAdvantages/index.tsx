import React, { useState, FC } from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./listAdvantages.module.css";
import { useGetSolutionAdvantagesQuery } from "@/src/store/services/solutions";
import { PropsSolutionAdvantages } from "../../platforms/types";

interface IListSolutionAdvantages {
    results: PropsSolutionAdvantages[];
}

export const ListAdvantages: FC<IListSolutionAdvantages> = ({ results = [] }) => {
    return (
        <ul className={styles.list}>
            {results.map((item, id) => (
                <li className={styles.listItem} key={id}>
                    <Text type={"reg18"} color={"grey"}>
                        {item.advantage}
                    </Text>
                </li>
            ))}
        </ul>
    );
};
