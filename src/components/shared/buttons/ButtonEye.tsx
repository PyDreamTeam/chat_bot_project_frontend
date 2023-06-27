import React, { FC, useState } from "react";
import styles from "./styles/styles.module.css";
import OpenEye from "../images/img/showPassword.svg";
import CloseEye from "../images/img/hidePassword.svg";
import Image from "next/image";
import {number, string} from "yup";

interface IButtonEye {
     show?: boolean;
     onClick?: () => void;
     id?: string;
     isOpenEye?: boolean;
}

const ButtonEye: FC<IButtonEye> = ({ onClick, id, isOpenEye }) => {
     return <Image alt="eye" src={isOpenEye ? OpenEye : CloseEye} id={id} onClick={onClick} className={styles.buttonEye} />;
};

export default ButtonEye;