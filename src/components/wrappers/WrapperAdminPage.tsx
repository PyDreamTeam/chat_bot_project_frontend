import Link from "next/link";
import { FC, PropsWithChildren, useState } from "react";
import css from "./styles/styles.module.css";
import Text from "../shared/text/Text";
import Logo, { LogoVariantProps } from "../shared/Logo/Logo";
import Image from "next/image";
import Footer from "../features/HomePage/Footer/Footer";
import AdminSidebar from "../features/AdminPage/AdminSidebar/AdminSidebar";

const adminNavigation = [
    { title: "Кабинет администратора", href: "/admin", icon: "/admin/icon_home.svg" },
    { title: "Администрация и модерация", href: "/admin/users/all", icon: "/admin/icon_people.svg" },
    { title: "Платформы", href: "/admin/platforms", icon: "/admin/icon_platform.svg" },
    { title: "Решения", href: "/admin/solutions", icon: "/admin/icon_solution.svg" },
    { title: "Настройки", href: "/admin/settings", icon: "/admin/icon_settings.svg" },
];

const sidebarData = [
    { title: "Кабинет администратора", path: "/admin", icon: "/admin/icon_home.svg" },
    { title: "Администрация и модерация", path: "/admin/users/all", icon: "/admin/icon_people.svg" },
    {
        title: "Платформы",
        path: "/admin/platforms",
        icon: "/admin/icon_platform.svg",
        iconClosed: "/admin/icon_arrow_right.svg",
        iconOpened: "/admin/icon_arrow_up.svg",
        subNav: [
            {
                title: "Работа с платформами",
                path: "/admin/platforms",
                icon: "/admin/icon_platform.svg",
            },
            {
                title: "Фильтры платформ",
                path: "/admin/platforms/platforms-filters/",
                icon: "/admin/icon_filter.svg",
            },
        ],
    },
    {
        title: "Решения",
        path: "/admin/solutions",
        icon: "/admin/icon_solution.svg",
        iconClosed: "/admin/icon_arrow_right.svg",
        iconOpened: "/admin/icon_arrow_up.svg",
        subNav: [
            {
                title: "Работа с решениями",
                path: "/admin/solutions",
                icon: "/admin/icon_solution.svg",
            },
            {
                title: "Фильтры платформ",
                path: "/admin/platforms/platforms-filters",
                icon: "/admin/icon_filter.svg",
            },
        ],
    },
    {
        title: "Настройки",
        path: "/admin/settings",
        icon: "/admin/icon_settings.svg",
        iconClosed: "/admin/icon_arrow_right.svg",
        iconOpened: "/admin/icon_arrow_up.svg",
        subNav: [
            {
                title: "Персональные данные",
                path: "/admin/settings/personal-data",
                icon: "/admin/icon_admin.svg",
            },
            {
                title: "Настройка тарифов",
                path: "/admin/settings/tariffs",
                icon: "/admin/icon_settings.svg",
            },
        ],
    },
];

// TODO: navigation for SuperAdmin, Admin and Moderator

export const WrapperAdminPage: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <div className={css.container}>
                <AdminSidebar />

                <div>{children}</div>
            </div>
            <Footer />
        </div>
    );
};
