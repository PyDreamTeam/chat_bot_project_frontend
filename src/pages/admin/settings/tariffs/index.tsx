import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import styles from "./tariffs.module.css";
// import { ButtonSmallPrimary } from "@/src/components/shared/buttons/ButtonSmallPrimary";
// import { plusSvgSecondary } from "@/src/components/entities/platformsFilters/img/SvgConfig";
import { useGetTariffsListQuery } from "@/src/store/services/userAuth";
import ListCardsTariffs from "@/src/components/entities/lists/listCardsTariffs/ListCardsTariffs";

const AdminTariffs = () => {
    const { data, isLoading, isSuccess } = useGetTariffsListQuery({}, { refetchOnMountOrArgChange: true });

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
                        {/* <ButtonSmallPrimary active={true} type={"button"} onClick={() => console.log("create tariff")}>
                            {plusSvgSecondary}
                            Создать тариф
                        </ButtonSmallPrimary> */}
                    </div>
                </div>
                <ListCardsTariffs results={data?.results} type="admin" />
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default AdminTariffs;
