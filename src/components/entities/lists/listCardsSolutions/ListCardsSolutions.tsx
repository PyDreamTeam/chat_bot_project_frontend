import React, { FC } from "react";
import styles from "./styles/ListCardsSolutions.module.css";
import CardSolution from "@/src/components/shared/tabs/cardSolution/CardSolution";
import { useRouter } from "next/router";
import { PropsSolutionCard } from "../../platforms/types";

export interface IListCardsSolutions {
    results: PropsSolutionCard[];
}

const ListCardsSolutions: FC<IListCardsSolutions> = ({ results = [] }) => {
    const router = useRouter();
    const handleClick = (idp: number) => {
        router.push(`/solutions/solution/${idp}`);
    };
    return (
        <div className={styles.cards}>
            {results.map((tab: PropsSolutionCard) => (
                <div
                    className={styles.link}
                    key={tab.id}
                    onClick={() => {
                        if (tab.id) {
                            handleClick(tab.id);
                        }
                    }}
                >
                    <CardSolution
                        type="slider"
                        id={tab.id}
                        key={tab.id}
                        image={tab.image}
                        title={tab.title}
                        price={tab.price}
                        short_description={tab.short_description}
                        tags={tab.tags}
                    />
                </div>
            ))}
        </div>
    );
};

export default ListCardsSolutions;
