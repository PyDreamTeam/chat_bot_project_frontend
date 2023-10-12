import React, { FC, FormEvent, MouseEventHandler } from "react";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import styles from "./styles/OrdersDeletedPopup.module.css";
import Title from "@/src/components/shared/text/Title";

interface IOrdersDeletedPopup {
    activePopup?: boolean;
    id: string | undefined;
    close: () => void;
}

const OrdersDeletedPopup: FC<IOrdersDeletedPopup> = ({ activePopup, id, close }) => {
    return (
        <div className={`${styles.ordersDeletedPopup} ${activePopup ? styles.active : null}`}>
            <div className={styles.popupWrapper}>
                <Image
                    src="/img/ep_success-filled.svg"
                    alt="imgSuccess"
                    width={24}
                    height={24}
                    className={styles.imgSuccess}
                />
                <div className={styles.textSuccess}>
                    <Title type="h6" color="black">
                        {`Заказ ${id} удален!`}
                    </Title>
                </div>
                <Image
                    src="/sign/close.svg"
                    alt="close"
                    width={24}
                    height={24}
                    onClick={close}
                    className={styles.imgClose}
                />
            </div>
        </div>
    );
};

export default OrdersDeletedPopup;
