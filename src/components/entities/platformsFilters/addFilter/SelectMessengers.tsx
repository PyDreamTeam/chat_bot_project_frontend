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
        { tag: "Facebook", image_tag: "fb", status: "save", is_message: true },
        { tag: "ВКонтакте", image_tag: "vk", status: "save", is_message: true },
        { tag: "Viber", image_tag: "viber", status: "save", is_message: true },
        { tag: "Telegram", image_tag: "telegram", status: "save", is_message: true },
        { tag: "Whatsapp", image_tag: "wp", status: "save", is_message: true },
    ];

    const [defaultArr, setDefaultArr] = useState<(ITagM | undefined)[] | undefined>(defaultMessengers);

    const [selected, setSelected] = useState<(ITagM | undefined)[] | undefined>(defaultMessengers);

    const handleClick = (messenger: ITagM) => {
        if (selected) {
            const arr = selected?.slice();
            const clickedItem = arr?.find((item, index) => item?.tag === messenger.tag);
            if (clickedItem == undefined) {
                arr?.push(messenger);
            } else {
                const index = arr.findIndex((item) => item?.tag == messenger.tag);
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
                            selected?.find((item) => item?.tag === messenger.tag) != undefined ||
                            defaultArr?.find((item) => item?.tag === messenger.tag) != undefined
                                ? styles.iconMessengerSelected
                                : styles.iconMessenger
                        }
                        onClick={() => handleClick(messenger)}
                    >
                        <Image
                            src={`/platforms/${messenger.image_tag}.svg`}
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
