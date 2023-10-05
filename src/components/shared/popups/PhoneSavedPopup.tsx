import React, { FC, FormEvent, MouseEventHandler } from "react";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import styles from "./styles/PhoneSavedPopup.module.css";
import Title from "@/src/components/shared/text/Title";

interface IPhoneSavedPopup {
    activePopup?: boolean;
    phone: string | undefined;
    close: () => void;
}

const PhoneSavedPopup: FC<IPhoneSavedPopup> = ({ activePopup, phone, close }) => {
    return (
        <div className={`${styles.phoneSavedPopup} ${activePopup ? styles.active : null}`}>
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
                        {`Номер телефона ${phone} успешно сохранен!`}
                    </Title>
                    <Text type="reg16" color="telegray">
                        Изменить номер телефона можно в профиле в личном кабинете
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

export default PhoneSavedPopup;
