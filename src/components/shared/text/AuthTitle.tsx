import React, { FC } from "react";

import styles from "./styles/styles.module.css";

export interface IAuthTitle {
    text: string;
}

const AuthTitle: FC<IAuthTitle> = ({ text }) => {
    return (
        <title
            className={`${styles.authTitle} ${text === "Восстановление пароля" && styles.textAlignLeft} ${
                text === "Обновите пароль" && styles.textAlignLeftRestore
            }`}
        >
            {text}
        </title>
    );
};

export default AuthTitle;
