/* eslint-disable react/no-unescaped-entities */
import Text from "@/src/components/shared/text/Text";
import React from "react";
import Image from "next/image";
import Title from "../text/Title";

const logoIcons = ["/img/logos_facebook.svg", "/img/logos_VK.svg", "/img/logos_viber.svg", "/img/logos_telegram.svg"];

export const CARDS_SOLUTIONS = [
    {
        id: 1,
        logo: <Image src={"img/domconnect-online-service-logo.png"} alt="logo-image" width={100} height={100} />,
        title: (
            <Title type={"h5"} color={"black"}>
                Aimylogic
            </Title>
        ),
        favorite: false,
        price: (
            <Title type={"h4"} color={"black"}>
                40 BYN
            </Title>
        ),
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
        logo: <Image src={"img/domconnect-online-service-logo.png"} alt="logo-image" width={100} height={100} />,
        title: (
            <Title type={"h5"} color={"black"}>
                Aimylogic
            </Title>
        ),
        favorite: true,
        price: (
            <Title type={"h4"} color={"black"}>
                40 BYN
            </Title>
        ),
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
        logo: <Image src={"img/domconnect-online-service-logo.png"} alt="logo-image" width={100} height={100} />,
        title: (
            <Title type={"h5"} color={"black"}>
                Aimylogic
            </Title>
        ),
        favorite: false,
        price: (
            <Title type={"h4"} color={"black"}>
                40 BYN
            </Title>
        ),
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
        logo: <Image src={"img/domconnect-online-service-logo.png"} alt="logo-image" width={100} height={100} />,
        title: (
            <Title type={"h5"} color={"black"}>
                Aimylogic
            </Title>
        ),
        favorite: false,
        price: (
            <Title type={"h4"} color={"black"}>
                40 BYN
            </Title>
        ),
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
        logo: <Image src={"img/domconnect-online-service-logo.png"} alt="logo-image" width={100} height={100} />,
        title: (
            <Title type={"h5"} color={"black"}>
                Aimylogic
            </Title>
        ),
        favorite: false,
        price: (
            <Title type={"h4"} color={"black"}>
                40 BYN
            </Title>
        ),
        description: (
            <Text type={"reg18"} color={"telegray"}>
                Мультиканальная платформа для создания чат-ботов с "искусственным интеллектом" и голосовых ботов
            </Text>
        ),
        features: ["Битрикс24", "визуальный редактор"],
        messengers: logoIcons,
    },
];
