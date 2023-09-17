import React, { FC } from "react";
import styles from "./styles/ListSolutions.module.css";
import { IListCardsSolutions } from "@/src/components/entities/lists/listCardsSolutions/ListCardsSolutions";
import CardSolution from "@/src/components/shared/tabs/cardSolution/CardSolution";
import { useRouter } from "next/router";

const ListAllSolutions: FC<IListCardsSolutions> = ({ results = [] }) => {
    const router = useRouter();
    const handleClick = (idp: number) => {
        router.push(`/solutions/solution/${idp}`);
    };
    return (
        <div className={styles.solutions}>
            {results.map((tab) => (
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
                        type="other"
                        id={tab.id}
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

export default ListAllSolutions;
