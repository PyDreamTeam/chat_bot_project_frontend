import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import css from "./admin.module.css";
import Banner from "./components/Banner";
import { useEffect } from "react";
import { useRouter } from "next/router";

const superAdminNavigation = [
    {
        title: "Платформы",
        subTitles: [
            { subTitle: "Опубликованные платформы", subHref: "/admin/platforms", sort: "public" },
            { subTitle: "Созданные платформы", subHref: "/admin/platforms", sort: "save" },
            { subTitle: "Архив платформ", subHref: "/admin/platforms", sort: "archive" },
            { subTitle: "Создать платформу", subHref: "/admin/platforms/add-platform" },
            { subTitle: "Фильтры платформ", subHref: "/admin/platforms/platforms-filters" },
        ],
        href: "/admin/platforms",
        icon: "/admin/icon_platform.svg",
    },
    {
        title: "Решения",
        subTitles: [
            { subTitle: "Опубликованные решения", subHref: "/admin/solutions", sort: "public" },
            { subTitle: "Созданные решения", subHref: "/admin/solutions", sort: "save" },
            { subTitle: "Архив решений", subHref: "/admin/solutions", sort: "archive" },
            { subTitle: "Создать решение", subHref: "/admin/solutions/add-solution" },
            { subTitle: "Фильтры решений", subHref: "/admin/solutions/solutions-filters" },
        ],
        href: "/admin/solutions",
        icon: "/admin/icon_solution.svg",
    },
    {
        title: "Администрация и модерация",
        subTitles: [
            { subTitle: "Администраторы", subHref: "/admin/users/administrators" },
            { subTitle: "Модераторы", subHref: "/admin/users/moderators" },
        ],
        href: "/admin/users/all",
        icon: "/admin/icon_people.svg",
    },
    /* { title: "Личный кабинет", href: "/admin/account", icon: "/admin/icon_admin.svg" }, */
    {
        title: "Настройки",
        subTitles: [
            { subTitle: "Персональные данные", subHref: "/admin/settings/personal-data" },
            { subTitle: "Тарифы", subHref: "/admin/settings/tariffs" },
        ],
        href: "/admin/settings",
        icon: "/admin/icon_settings.svg",
    },
];

const AdminPage = () => {
    const route = useRouter();

    const token = JSON.parse(Cookies.get("loginUser") || "[]").access;

    const { data } = useDataUserQuery(token);

    const adminNavigation = superAdminNavigation.slice();
    if (data?.user_role !== "SA") {
        adminNavigation.splice(2, 1);
    }

    return (
        <WrapperAdminPage>
            <ContainerAdminFunction>
                <Banner />
                <ul className={`${css.listNav} ${adminNavigation.length === 4 && css.wrap}`}>
                    {adminNavigation.map(({ title, subTitles, href, icon }) => {
                        return (
                            <div key={title} className={`${css.nav} ${adminNavigation.length === 4 && css.superAdmin}`}>
                                <div className={css.header}>
                                    <Image src={icon} alt="icon" width={64} height={64} className={css.icon} />
                                    <Link href={href}>
                                        <Title type="h5" color="dark">
                                            {title}
                                        </Title>
                                    </Link>
                                </div>
                                <div className={css.subTitles}>
                                    {subTitles?.map(({ subTitle, subHref, sort }) => {
                                        return (
                                            <Link key={subTitle} href={{ pathname: subHref, query: { sort: sort } }}>
                                                <Text type="reg16" color="grey">
                                                    {subTitle}
                                                </Text>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </ul>
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default AdminPage;
