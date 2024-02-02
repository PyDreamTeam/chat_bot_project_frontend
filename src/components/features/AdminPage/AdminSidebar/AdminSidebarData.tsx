import React from "react";

export interface ISidebarItem {
    id: number;
    title: string;
    path: string;
    icon: string;
    iconClosed?: string;
    iconOpened?: string;
    subNav?: {
        id: number;
        title: string;
        path: string;
        icon: string;
    }[];
}

export const sidebarData: ISidebarItem[] = [
    { id: 1, title: "Кабинет суперадминистратора", path: "/admin", icon: "/admin/icon_home.svg" },
    { id: 2, title: "Администрация и модерация", path: "/admin/users/all", icon: "/admin/icon_people.svg" },
    {
        id: 3,
        title: "Платформы",
        path: "",
        icon: "/admin/icon_platform.svg",
        iconClosed: "/admin/icon_arrow_right.svg",
        iconOpened: "/admin/icon_arrow_up.svg",
        subNav: [
            {
                id: 31,
                title: "Работа с платформами",
                path: "/admin/platforms",
                icon: "/admin/icon_platform.svg",
            },
            {
                id: 32,
                title: "Фильтры платформ",
                path: "/admin/platforms/platforms-filters",
                icon: "/admin/icon_filter.svg",
            },
        ],
    },
    {
        id: 4,
        title: "Решения",
        path: "",
        icon: "/admin/icon_solution.svg",
        iconClosed: "/admin/icon_arrow_right.svg",
        iconOpened: "/admin/icon_arrow_up.svg",
        subNav: [
            {
                id: 41,
                title: "Работа с решениями",
                path: "/admin/solutions",
                icon: "/admin/icon_solution.svg",
            },
            {
                id: 42,
                title: "Фильтры решений",
                path: "/admin/solutions/solutions-filters",
                icon: "/admin/icon_filter.svg",
            },
        ],
    },
    {
        id: 5,
        title: "Настройки",
        path: "",
        icon: "/admin/icon_settings.svg",
        iconClosed: "/admin/icon_arrow_right.svg",
        iconOpened: "/admin/icon_arrow_up.svg",
        subNav: [
            {
                id: 51,
                title: "Персональные данные",
                path: "/admin/settings/personal-data",
                icon: "/admin/icon_admin.svg",
            },
            {
                id: 52,
                title: "Настройка тарифов",
                path: "/admin/settings/tariffs",
                icon: "/admin/icon_settings.svg",
            },
        ],
    },
];
