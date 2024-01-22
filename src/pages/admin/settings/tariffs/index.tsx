import { useEffect, useState } from "react";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import styles from "./tariffs.module.css";
import { ButtonSmallPrimary } from "@/src/components/shared/buttons/ButtonSmallPrimary";
import { plusSvgPrimary, plusSvgSecondary } from "@/src/components/entities/platformsFilters/img/SvgConfig";
import { useGetTariffsListQuery } from "@/src/store/services/userAuth";
import { TariffCardAdmin } from "@/src/components/entities/cards/cardsTariffs/TariffCardAdmin/TariffCardAdmin";
import { ITariff } from "@/src/components/features/HomePage/Main/blockTariffPlan/BlockTariffPlan";

const AdminTariffs = () => {
    const { data, isLoading, isSuccess } = useGetTariffsListQuery({});

    return (
        <WrapperAdminPage>
            <ContainerAdminFunction>
                <div className={styles.links}>
                    <Link href={"/admin"}>
                        <Text type="reg16" color="telegray">
                            Главная
                        </Text>
                    </Link>
                    <Link href={"/admin/settings"}>
                        <Text type="reg16" color="telegray">
                            /Настройки
                        </Text>
                    </Link>
                    <span className={styles.link}>/Тарифы</span>
                </div>
                <div className={styles.workFilters}>
                    <Text type="med20" color="dark">
                        Работа с тарифами
                    </Text>
                    <div className={styles.buttonsBlock}>
                        <ButtonSmallPrimary
                            active={true}
                            type={"button"}
                            // onClick={() => setIsShownInput((prevState) => (prevState = true))}
                        >
                            {plusSvgSecondary}
                            Создать тариф
                        </ButtonSmallPrimary>
                    </div>
                </div>
                <div className={styles.cardsContainer}>
                    {data?.results.map((item: ITariff) => (
                        <TariffCardAdmin
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            advantages={item.tags_of_rates}
                            hotPlan={item.is_special === "hot plan" ? true : false}
                        />
                    ))}
                </div>
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default AdminTariffs;
