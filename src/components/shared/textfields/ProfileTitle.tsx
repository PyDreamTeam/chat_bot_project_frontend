import React, { FC } from "react";

import styles from "./styles/styles.module.css";

export interface IProfileTitle {
    text: string;
}

const ProfileTitle: FC<IProfileTitle> = ({ text }) => {
     return <title className={`${styles.profileTitle} ${text === "Персональные данные" && styles.textAlignLeft}`}>{text}</title>;
};

export default ProfileTitle;