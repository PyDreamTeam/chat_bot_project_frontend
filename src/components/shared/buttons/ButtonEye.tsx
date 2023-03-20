import React, { FC, useState } from "react";
import styles from "./styles/styles.module.css";
import OpenEye from "../images/pictures/png/showPassword.png";
import CloseEye from "../images/pictures/png/hidePassword.png";
import Image from "next/image";
import { IShowEye } from "@/src/pages/update-password";

interface IButtonEye {
     show?: boolean | IShowEye;
     onClick?: () => void;
     id?: any;
     isOpenEye?: boolean;
}

const ButtonEye: FC<IButtonEye> = ({ onClick, id, isOpenEye }) => {
     return <Image alt="eye" src={isOpenEye ? OpenEye : CloseEye} id={id} onClick={onClick} className={styles.buttonEye} />;
};

export default ButtonEye;