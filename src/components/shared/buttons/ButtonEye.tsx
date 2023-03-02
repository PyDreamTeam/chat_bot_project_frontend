import React, { FC, useState } from "react";
import styles from "./styles/styles.module.css";
import OpenEye from "../images/pictures/png/showPassword.png";
import CloseEye from "../images/pictures/png/hidePassword.png";
import Image from "next/image";
import { IShowEye } from "@/src/pages/change-password";

interface IButtonEye {
     show?: boolean | IShowEye;
     onClick?: () => void;
     id?: any;
     activeEye?: string;
}

const ButtonEye: FC<IButtonEye> = ({ show, onClick, id, activeEye }) => {
     return <Image alt="eye" src={id === activeEye ? OpenEye : CloseEye} id={id} onClick={onClick} className={styles.buttonEye} />;
};

export default ButtonEye;
