import Text from "@/src/components/shared/text/Text";
import React from "react";
import Image from "next/image";

export const CARDS_OUR_ADVANTAGES = [
    {
        id: 1,
        icon: <Image src={"/icon/payment-acceptance.png"} alt="logo-image" width={40} height={40} />,
        text: (
            <Text type={"med20"} color={"black"}>
                Прием оплат в мессенджере
            </Text>
        ),
    },
    {
        id: 2,
        icon: <Image src={"/icon/request-automation.png"} alt="logo-image" width={40} height={40} />,
        text: (
            <Text type={"med20"} color={"white"}>
                Автоматизации обработки заявок
            </Text>
        ),
    },
    {
        id: 3,
        icon: <Image src={"/icon/saving-cost.png"} alt="logo-image" width={40} height={40} />,
        text: (
            <Text type={"med20"} color={"white"}>
                Снижение затрат на реализацию идей
            </Text>
        ),
    },
    {
        id: 4,
        icon: <Image src={"/icon/increased-conversions.png"} alt="logo-image" width={40} height={40} />,
        text: (
            <Text type={"med20"} color={"black"}>
                Увеличение конверсий
            </Text>
        ),
    },
];
