import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import styles from "./personalData.module.css";

import Text from "@/src/components/shared/text/Text";
import Link from "next/link";

const PersonalDataAdmin = () => {
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
                    <span className={styles.link}>/Персональные данные</span>
                </div>
                <div className={styles.workFilters}>
                    <Text type="med20" color="dark">
                        Персональные данные
                    </Text>
                </div>
                <Text type="med20" color="red">
                    🛠️ Страница находится в разработке 🛠️
                </Text>
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default PersonalDataAdmin;
