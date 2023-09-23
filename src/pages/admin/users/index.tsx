import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import css from "./styles/users.module.css";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";
import Image from "next/image";
import InputSearch from "@/src/components/entities/platforms/rightBlock/InputSearch/InputSearch";
import { useRouter } from "next/router";
import { PropsWithChildren,FC, useEffect, useState } from "react";
import SettingsTabs from "@/src/components/shared/settingsTabs/SettingsTabs";

const firstTab = 1;
const secondTab = 2;
const thirdTab = 3;

export const TABS_CONFIG = [
    {
        id: 1,
        title: "Все",
        href: clientEndpoints.admin.users.all,
    },
    {
        id: 2,
        title: "Администраторы",
        href: clientEndpoints.admin.users.administrators,
    },
    {
        id: 3,
        title: "Модераторы",
        href: clientEndpoints.admin.users.moderators,
    },
];
const UsersAdmin: FC<PropsWithChildren> = ({children}) => {
     

    const router = useRouter();
    const [activeTabItem, setActiveTabItem] = useState<number>(firstTab);

    useEffect(() => {
        switch (router.route) {
            case clientEndpoints.admin.users.all:
                return setActiveTabItem(firstTab);
            case clientEndpoints.admin.users.administrators:
                return setActiveTabItem(secondTab);
            case clientEndpoints.admin.users.moderators:
                return setActiveTabItem(thirdTab);
            default:
                setActiveTabItem(firstTab);
        }
    }, [router]);

    return(
        <WrapperAdminPage>
            <ContainerAdminFunction>
            <div className={css.links}>
                <Link href={"/admin"}>
                    <Text type="reg16" color="telegray">Главная</Text>
                </Link>
                <span className={css.link}>/Администрация и модерация</span>
                <span className={css.link}>/Управление пользователями</span>
            </div>

            <div className={css.work}>
                <Text type="med20" color="dark">Управление пользователями</Text>
                <button className={css.addBtn}><Text type="reg16" color="white">+ Добавить пользователя</Text></button>
            </div>
            <div className={css.groupSearch}>
                <Image
                    src="/img/Icon_найти_платформу.svg"
                    alt="search"
                    width={24}
                    height={24}
                    className={css.search}
                />
                <InputSearch
                    value=""
                    placeholder="Поиск"
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>
            <SettingsTabs config={TABS_CONFIG} activeTabItem={activeTabItem} />
            <div className={css.listHeader}>
                <div className={css.orderName}>
                    <Text type="sem16" color="dark">
                        Имя
                    </Text>
                </div>
                <div className={css.orderEmail}>
                    <Text type="sem16" color="dark">
                        E-mail
                    </Text>
                </div>
                <div className={css.orderPhone}>
                    <Text type="sem16" color="dark">
                        Роль пользователя
                    </Text>
                </div>
                <div className={css.orderComment}>
                    <Text type="sem16" color="dark">
                        Статус
                    </Text>
                </div>
            </div>
            {children}
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default UsersAdmin;