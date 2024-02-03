import css from "./blockTariffPlan.module.css";
import Title from "@/src/components/shared/text/Title";
import { useGetTariffsListQuery } from "@/src/store/services/userAuth";
import ListCardsTariffs from "@/src/components/entities/lists/listCardsTariffs/ListCardsTariffs";

export const BlockTariffPlan = () => {
    const { data, isLoading, isSuccess } = useGetTariffsListQuery({});

    return (
        <div className={css.wrapper}>
            <div className={css.title}>
                <Title type="h3" color="dark">
                    Тарифы
                </Title>
            </div>
            <ListCardsTariffs results={data?.results} type="main" />
        </div>
    );
};
