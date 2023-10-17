import React, { FC, FormEvent, MouseEventHandler } from "react";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import styles from "./styles/OrderSavedPopup.module.css";
import Title from "@/src/components/shared/text/Title";

interface IOrderSavedPopup {
    activePopup?: boolean;
    close: () => void;
}

const OrderSavedPopup: FC<IOrderSavedPopup> = ({ activePopup, close }) => {
    return (
        <div className={`${styles.orderSavedPopup} ${activePopup ? styles.active : null}`}>
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
                        Заказ сохранен!
                    </Title>
                    <Text type="reg16" color="telegray">
                        Изменить данные в заказе можно в личном кабинете
                    </Text>
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

export default OrderSavedPopup;
