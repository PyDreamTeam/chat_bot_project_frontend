import React, { FC, useState, useEffect } from "react";
import styles from "./style.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";

export interface SelectMessengers {
    setMessengers: (tagsM: IMessenger[]) => void;
}

export interface IMessenger {
    name: string;
    image: string;
    active: boolean;
}

export const SelectMessengers: FC<SelectMessengers> = ({ setMessengers }) => {
    const messengers: IMessenger[] = [
        { name: "Facebook", image: "fb", active: true },
        { name: "ВКонтакте", image: "vk", active: true },
        { name: "Viber", image: "viber", active: true },
        { name: "Telegram", image: "telegram", active: true },
        { name: "Whatsapp", image: "fb", active: true },
    ];

    const [selected, setSelected] = useState<IMessenger[]>([]);
    const handleClick = (messenger: IMessenger) => {
        const arr = selected?.slice();
        if (arr?.find((item, index) => item.name === messenger.name) == undefined) {
            arr?.push(messenger);
        } else {
            arr.splice(arr.indexOf(messenger), 1);
        }
        console.info(`selected arr: [ ${arr} ]`);
        setSelected(arr);
        setMessengers(arr);
    };
    useEffect(() => {
        // setSelected(selected);
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
                            selected.find((item) => item.name === messenger.name) == undefined
                                ? styles.iconMessenger
                                : styles.iconMessengerSelected
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
