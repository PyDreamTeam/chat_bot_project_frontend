import { TariffCard } from "@/src/components/entities/cards/cardsTariffs/TariffCard/TariffCard";
import { TariffPlanCard } from "@/src/types";
import css from "./blockTariffPlan.module.css";
import Title from "@/src/components/shared/text/Title";
import Cookies from "js-cookie";
import { useGetTariffsListQuery } from "@/src/store/services/userAuth";

export interface ITariff {
    id?: number;
    tags_of_rates: string[];
    title: string;
    price: string;
    created_at?: string;
    is_special: string | null;
}

export const BlockTariffPlan = () => {
    const { data, isLoading, isSuccess } = useGetTariffsListQuery({});

    return (
        <div className={css.wrapper}>
            <div className={css.title}>
                <Title type="h3" color="dark">
                    Тарифы
                </Title>
            </div>
            <ul className={css.container}>
                {data?.results.map((item: ITariff) => (
                    <TariffCard
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        advantages={item.tags_of_rates}
                        hotPlan={item.is_special === "hot plan" ? true : false}
                    />
                ))}
            </ul>
        </div>
    );
};
