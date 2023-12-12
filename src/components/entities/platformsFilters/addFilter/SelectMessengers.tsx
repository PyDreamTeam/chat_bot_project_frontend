import React, { FC, useState, useEffect } from "react";
import styles from "./style.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { ITagM } from "@/src/pages/admin/platforms/platforms-filters/add-filter";

export interface SelectMessengers {
    defaultMessengers?: (ITagM | undefined)[];
    setMessengers: (tagsM: (ITagM | undefined)[] | undefined) => void;
}

export interface IMessenger {
    name: string;
    image: string;
    active: boolean;
}

export const SelectMessengers: FC<SelectMessengers> = ({ defaultMessengers, setMessengers }) => {
    const messengers: ITagM[] = [
        { properties: "Facebook", image: "fb", status: "save", is_message: true },
        { properties: "ВКонтакте", image: "vk", status: "save", is_message: true },
        { properties: "Viber", image: "viber", status: "save", is_message: true },
        { properties: "Telegram", image: "telegram", status: "save", is_message: true },
        { properties: "Whatsapp", image: "wp", status: "save", is_message: true },
    ];

    const [defaultArr, setDefaultArr] = useState<(ITagM | undefined)[] | undefined>(defaultMessengers);

    const [selected, setSelected] = useState<(ITagM | undefined)[] | undefined>(defaultMessengers);

    const handleClick = (messenger: ITagM) => {
        if (selected) {
            const arr = selected?.slice();
            const clickedItem = arr?.find((item, index) => item?.properties === messenger.properties);
            if (clickedItem == undefined) {
                arr?.push(messenger);
            } else {
                const index = arr.findIndex((item) => item?.properties == messenger.properties);
                arr.splice(index, 1);
            }
            setSelected(arr);
            setDefaultArr(arr);
            setMessengers(arr);
            console.log(arr);
        } else {
            const arr: ITagM[] = [];
            arr?.push(messenger);
            setSelected(arr);
            setDefaultArr(arr);
            setMessengers(arr);
        }
    };

    useEffect(() => {
        setSelected(selected);
    }, [selected]);

    return (
        <div className={styles.dropDown}>
            <Text type="reg18" color="dark">
                Выбор мессенджеров
            </Text>
            <div className={styles.iconsMessengersBlock}>
                {messengers.map((messenger, index) => (
                    <div
                        key={index}
                        className={
                            selected?.find((item) => item?.properties === messenger.properties) != undefined ||
                            defaultArr?.find((item) => item?.properties === messenger.properties) != undefined
                                ? styles.iconMessengerSelected
                                : styles.iconMessenger
                        }
                        onClick={() => handleClick(messenger)}
                    >
                        <Image
                            src={`/platforms/${messenger.image}.svg`}
                            width={40}
                            height={40}
                            alt="messenger"
                            className={styles.iconImg}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
