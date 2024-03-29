/* eslint-disable react/no-unescaped-entities */
import Text from "@/src/components/shared/text/Text";
import React from "react";
import Image from "next/image";
import Title from "../text/Title";

const logoIcons = [
    "/img/logos_facebook.svg",
    "/img/logos_whatsapp-icon.svg",
    "/img/logos_VK.svg",
    "/img/logos_viber.svg",
    "/img/logos_telegram.svg",
];

export const CARDS_PLATFORMS = [
    {
        id: 1,
        logo: <Image src={"img/aimylogic-online-service-logo.png"} alt="logo-image" width={100} height={100} />,
        title: (
            <Title type={"h5"} color={"black"}>
                Aimylogic
            </Title>
        ),
        favorite: false,
        description: (
            <Text type={"reg18"} color={"telegray"}>
                Мультиканальная платформа для создания чат-ботов с "искусственным интеллектом" и голосовых ботов
            </Text>
        ),
        features: ["Битрикс24", "визуальный редактор"],
        messengers: logoIcons,
    },
    {
        id: 2,
        logo: <Image src={"img/aimylogic-online-service-logo.png"} alt="logo-image" width={100} height={100} />,
        title: (
            <Title type={"h5"} color={"black"}>
                Aimylogic
            </Title>
        ),
        favorite: true,
        description: (
            <Text type={"reg18"} color={"telegray"}>
                Мультиканальная платформа для создания чат-ботов с "искусственным интеллектом" и голосовых ботов
            </Text>
        ),
        features: ["Битрикс24", "визуальный редактор"],
        messengers: logoIcons,
    },
    {
        id: 3,
        logo: <Image src={"img/aimylogic-online-service-logo.png"} alt="logo-image" width={100} height={100} />,
        title: (
            <Title type={"h5"} color={"black"}>
                Aimylogic
            </Title>
        ),
        favorite: false,
        description: (
            <Text type={"reg18"} color={"telegray"}>
                Мультиканальная платформа для создания чат-ботов с "искусственным интеллектом" и голосовых ботов
            </Text>
        ),
        features: ["Битрикс24", "визуальный редактор"],
        messengers: logoIcons,
    },
    {
        id: 4,
        logo: <Image src={"img/aimylogic-online-service-logo.png"} alt="logo-image" width={100} height={100} />,
        title: (
            <Title type={"h5"} color={"black"}>
                Aimylogic
            </Title>
        ),
        favorite: false,
        description: (
            <Text type={"reg18"} color={"telegray"}>
                Мультиканальная платформа для создания чат-ботов с "искусственным интеллектом" и голосовых ботов
            </Text>
        ),
        features: ["Битрикс24", "визуальный редактор"],
        messengers: logoIcons,
    },
    {
        id: 5,
        logo: <Image src={"img/aimylogic-online-service-logo.png"} alt="logo-image" width={100} height={100} />,
        title: (
            <Title type={"h5"} color={"black"}>
                Aimylogic
            </Title>
        ),
        favorite: false,
        description: (
            <Text type={"reg18"} color={"telegray"}>
                Мультиканальная платформа для создания чат-ботов с "искусственным интеллектом" и голосовых ботов
            </Text>
        ),
        features: ["Битрикс24", "визуальный редактор"],
        messengers: logoIcons,
    },
];
