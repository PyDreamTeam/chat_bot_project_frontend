import React, { FC } from "react";
import styles from "./styles/ListCardsSolutions.module.css";
import CardSolution from "@/src/components/shared/tabs/cardSolution/CardSolution";
import { useRouter } from "next/router";
// import { PropsSolutionsList } from "../../platforms/types";

interface ICardSolution {
    id?: number;
    title?: string;
    business_model?: string;
    business_area?: string;
    business_niche?: string;
    objective?: string;
    solution_type?: string;
    short_description?: string;
    platform?: string;
    messengers?: string;
    integration_with_CRM?: string;
    integration_with_payment_systems?: string;
    tasks?: string;
    actions_to_complete_tasks?: string;
    turnkey_solutions?: number;
    image?: string;
    price?: number;
    is_active?: boolean;
    created_at?: string;
    tags?: {
        id?: number;
        tag?: string;
        image_tag?: string;
        is_active?: boolean;
        is_message?: boolean;
    }[];
}

export interface IListCardsSolutions {
    results: ICardSolution[];
}

const ListCardsSolutions: FC<IListCardsSolutions> = ({ results = [] }) => {
    const router = useRouter();
    const handleClick = (idp: number) => {
        router.push(`/solutions/solution/${idp}`);
    };
    return (
        <div className={styles.cards}>
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
