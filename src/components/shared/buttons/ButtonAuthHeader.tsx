import Link from "next/link";
import React from "react";
import styles from "./styles/styles.module.css";

export enum ButtonAuthClasses {
    signIn = "signIn",
    signUp = "signUp",
    credentials = "credentials",
}

interface ButtonAuthProps {
    text: string;
    href: string;
    className: ButtonAuthClasses.signIn | ButtonAuthClasses.signUp | ButtonAuthClasses.credentials;
}

const ButtonAuthHeader = ({ text, href, className }: ButtonAuthProps) => {
    return (
        <Link className={`${styles.buttonAuth} ${styles[className]}`} href={href}>
            {text}
        </Link>
    );
};

export default ButtonAuthHeader;
