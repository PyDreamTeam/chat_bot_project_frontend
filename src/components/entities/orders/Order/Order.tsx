import { FC } from "react";
import styles from "./styles/Order.module.css";
import { PropsOrder } from "../types";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";

export const Order: FC<PropsOrder> = ({ id, first_name, email, phone_number, comment }) => {
    return (
        // TODO: add id, phone, comment
        <div className={styles.container}>
            <div className={styles.orderNumber}>
                <Text type="reg16" color="grey">
                    1
                </Text>
            </div>
            <div className={styles.orderName}>
                <Text type="reg16" color="grey">
                    {first_name}
                </Text>
            </div>
            <div className={styles.orderEmail}>
                <Text type="reg16" color="grey">
                    {email}
                </Text>
            </div>
            <div className={styles.orderPhone}>
                <Text type="reg16" color="grey">
                    +74231234567
                </Text>
            </div>
            <div className={styles.orderComment}>
                <Text type="reg16" color="grey">
                    Мультиканальная платформа для создания чат-ботов
                </Text>
            </div>
            <div className={styles.orderIconEdit}>
                <Image
                    src="/img/Edit.svg"
                    alt="edit"
                    width={20}
                    height={20}
                    onClick={() => console.log("edit")}
                    className={styles.imgClose}
                />
            </div>
            <div className={styles.orderIconDelete}>
                <Image
                    src="/img/Delete.svg"
                    alt="edit"
                    width={18.5}
                    height={20}
                    onClick={() => console.log("delete")}
                    className={styles.imgClose}
                />
            </div>
        </div>
    );
};
